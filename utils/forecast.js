const request = require('request')
const log = console.log

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/68db5af343b1a89c046ae07c8b1226a0/${latitude},${longitude}`
    
    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            // const temp = response.body.currently.temperature
            // const prob = response.body.currently.precipProbability
            const daily = body.daily.data[0].summary
            const { temperature:temp, precipProbability:prob } = body.currently

            const message = `${daily} It is currently ${temp} degrees out. There is a ${prob}% chance of rain.`
            callback(undefined, message)
        }
    })
}

module.exports = forecast







