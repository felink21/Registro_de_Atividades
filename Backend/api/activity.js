module.exports = app => {
    const {existsOrError, notExistsOrError, nameMaxLenght, idPositive} = app.api.validator

    const save = (req, res) => {
        const activity = {...req.body}
        if (req.params.id) activity.id = req.params.id

        try {
            existsOrError(activity.name, 'Nome não informado!')
            nameMaxLenght(activity.name, 'Tamanho máximo 20')
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

    

    return { save }
}
