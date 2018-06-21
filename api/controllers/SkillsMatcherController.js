var axios = require('axios');

exports.jobs = async (req, res) => {
    var skill = req.params.skill
    var location = "london"

    const {data} = await axios.get(`https://jobs.github.com/positions.json?description=${skill}&location=${location}`);

    res.json(data);
}
