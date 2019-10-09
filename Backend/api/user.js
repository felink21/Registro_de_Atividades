const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError, nameMaxLenght } = app.api.validator

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }
        if (req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, 'Nome não informado!')
            existsOrError(user.email, 'E-mail não informado!')
            existsOrError(user.password, 'Senha não informada!')
            existsOrError(user.confirmPassword, 'Senha Inválida!')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não compatíveis!')
            nameMaxLenght(user.name, 'Tamanho máximo 20')

            const userFromDB = await app.db('users')
                .where({email: user.email}).first()
            if (user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado!')
            }

        } catch (msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)
        delete user.confirmPassword

        if (user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email')
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email')
            .where({ id: req.params.id })
            .first()
            .then(users => res.json(users))
            .catch(err => res.status(500).send(err))
    }

    const getActivitiesOfUser = (req, res) => {
        app.db('activities')
            .select('id','name','description')
            .where({userId: req.params.id})
            .then(activities => res.json(activities))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            existsOrError(req.params.id, 'Código do Usuário não informado!')

            const haveActivities = await app.db('activities')
                .where({userId: req.params.id})
                .first()
            notExistsOrError(haveActivities, 'Usuário ainda tem atividades')

            const rowsDeleted = await app.db('users')
                .where({ id: req.params.id }).del()

            try {
                existsOrError(rowsDeleted, 'Usuário não encontrado!')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getById, getActivitiesOfUser, remove}
}
