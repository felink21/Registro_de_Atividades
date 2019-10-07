module.exports = app => {
    const {existsOrError, idPositive} = app.api.validator

    const save = (req, res) => {
        const activity = {...req.body}
        if (req.params.id) activity.id = req.params.id

        try {
            existsOrError(activity.name, 'Nome não informado!')
            existsOrError(activity.userId, 'Autor não informado!')
            existsOrError(activity.description, 'Descrição não informada')
            existsOrError(activity.status, 'Status não informado [pendente,fazendo,concluído]')
        } catch (msg) {
            return res.status(400).send(msg)
        }

        if (activity.id) {
            app.db('activities')
                .update(activity)
                .where({id: activity.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('activities')
                .insert(activity)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código da Atividade não informado!')
            idPositive(req.params.id, 'Id deve ser maior que 0!')

            const rowsDeleted = await app.db('activities').where({id: req.params.id}).del()

            try {
                existsOrError(rowsDeleted, 'Ativitade não encontrado!')
            } catch (msg) {
                return res.status(400).send(msg)
            }
            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    const get = (req, res) => {
        app.db('activities')
            .then(activity => res.json(activity))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('activities')
            .where({id: req.params.id})
            .first()
            .then(activity => res.json(activity))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById, remove }
}
