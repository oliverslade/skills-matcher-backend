var cors = require('cors')
var express = require('express'),
    app = express(),
    routes = require("./api/routes/SkillsMatcherRoutes")
port = process.env.PORT || 3000;


app.use(cors())
routes(app)
app.listen(port);

console.log('RESTful API server started on: ' + port);
