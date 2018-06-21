'use strict';
module.exports = function(app) {
  var controller = require('../controllers/SkillsMatcherController');

  app.route('/submit')
    .get(controller.jobs)
    .post(controller.jobs)
};
