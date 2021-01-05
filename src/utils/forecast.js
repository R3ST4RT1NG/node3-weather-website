const request = require('postman-request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6dd59a97f9ae6d0c5f64ca748f2f9f58&query=' + lat + ',' + lon + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                Weather: body.current.weather_descriptions[0],
                Temperature: body.current.temperature,
                feelsLike: body.current.feelslike
            })
        }
    })
}

module.exports = forecast