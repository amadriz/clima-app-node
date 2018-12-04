const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=cbd7bade167b1b0c0eb0765a644ba78b`)
        //La info que trae del API
    return resp.data.main.temp;
}


module.exports = {
    getClima
}