'use strict';
module.exports = function (app) {
    var controller = require('../controllers/SkillsMatcherController');

    app.route('/jobs')
        .get(controller.jobs)
        .post(controller.jobs)
};
