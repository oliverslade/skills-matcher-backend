'use strict';
module.exports = function (app) {
    var controller = require('../controllers/SkillsMatcherController');

    app.route('/jobs/:skill/:location')
        .get(controller.jobs)
        .post(controller.jobs)
};
