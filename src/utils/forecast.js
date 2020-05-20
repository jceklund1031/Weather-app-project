const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3a8201df1129b07496ac8377bb0fb20b&query=${latitude},${longitude}&units=f`

   request({ url, json: true }, (error, { body }) => {
        if (error) {
        callback('Unable to connect to Service', undefined)
        } else if (body.error) {
        callback('Unable to find location', undefined)
         } else {
        callback(undefined, `${body.current.weather_descriptions[0]}. The current weather is ${body.current.temperature}, with a feel of ${body.current.feelslike}. The humidity is ${body.current.humidity}%`)
         }
    })

}

module.exports = forecast