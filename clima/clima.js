const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d6b1740235acea583ed95d11af0f678a&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}