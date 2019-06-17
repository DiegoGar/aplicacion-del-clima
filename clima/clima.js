const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=30c4700e80ff0097f54271c0877d1e09&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}