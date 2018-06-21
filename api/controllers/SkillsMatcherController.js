var axios = require('axios');

exports.jobs = async (req, res) => {
    const {data} = await axios.get(`https://jobs.github.com/positions.json?description=python&location=new+york`);

    res.json(data);
}
