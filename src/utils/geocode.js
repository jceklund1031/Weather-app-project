const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiamNla2x1bmQiLCJhIjoiY2thYThtNDB4MTFrcDJ0b3pscnpzNTI1MCJ9.mRrmnNGRsvXq7nrjnVVHiw&limit=1'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Location Services', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find Location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode