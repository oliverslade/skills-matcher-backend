var axios = require('axios');
var opportunities = require('../resources/Schema.json')

exports.jobs = async (req, res) => {
    var skills = Object.keys(req.body.skills)
    var location = "london"

    var positions = []

    for(var skill of skills) {
        const {data} = await axios.get(`https://jobs.github.com/positions.json?description=${skill}&location=${location}`);
        positions = [
            ...positions,
            ...data
        ]
    }

    res.json(positions);
}

exports.opportunities = async (req, res) => {
    res.json(opportunities);
}
