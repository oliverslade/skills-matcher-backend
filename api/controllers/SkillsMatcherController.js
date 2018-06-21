var axios = require('axios');

var skill = "java"
var location = "london"

exports.jobs = async (req, res) => {
    const {data} = await axios.get(`https://jobs.github.com/positions.json?description=${skill}&location=${location}`);

    res.json(data);
}
