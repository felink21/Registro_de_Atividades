
module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)

    app.route('/users')
      //  .all(app.config.passport.authenticate())
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/users/:id')
      //  .all(app.config.passport.authenticate())
        .put(app.api.user.save)
        .get(app.api.user.getById)
        .delete(app.api.user.remove)

    app.route('/activities')
        //.all(app.config.passport.authenticate())
        .get(app.api.activity.get)
        .post(app.api.activity.save)

    app.route('/activities/:id')
       // .all(app.config.passport.authenticate())
        .get(app.api.activity.getById)
        .put(app.api.activity.save)
        .delete(app.api.activity.remove)

    app.route('/users/:id/activities')
    //  .all(app.config.passport.authenticate())
        .get(app.api.user.getActivitiesOfUser)

    app.route('/users/:idUser/activities/:id')
    //  .all(app.config.passport.authenticate())
        .delete(app.api.activity.remove)
}
