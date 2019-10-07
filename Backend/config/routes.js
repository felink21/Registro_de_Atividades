
module.exports = app => {

    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/activities')
        .get(app.api.activity.get)
        .post(app.api.activity.save)

    app.route('/activities/:id')
        .get(app.api.activity.getById)
        .put(app.api.activity.save)
        .delete(app.api.activity.remove)
}
