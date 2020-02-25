const request = require('request')
const geocode = require('./utils/geocode')
const log = console.log
const url = 'https://api.darksky.net/forecast/68db5af343b1a89c046ae07c8b1226a0/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//     if(error){
//         log('Unable to connect to weather service!')
//     } else if (response.body.error){
//         log('Unable to find location')
//     } else {
//         const temp = response.body.currently.temperature
//         const prob = response.body.currently.precipProbability
//         const daily = response.body.daily.data[0].summary
//         const message = `${daily} It is currently ${temp} degrees out. There is a ${prob}% chance of rain.`
//         log(message)
//     }
// })

    

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY25yZGNhc3BlciIsImEiOiJjazcwcjRhNWwwMDBnM2RycmFubGFoeGc5In0.9eF5TIJ2O8clH5S5lUANpQ&limit=1'

// request({ url: url2, json: true }, (error, response) => {
//     if(error){
//         log('Unable to connect to location services!')
//     } else if(response.body.features.length === 0){
//         log('Unable to find location. Try another search.')
//     } else {
//         const lat = response.body.features[0].center[1]
//         const long = response.body.features[0].center[0]
//         log(lat, long)
//     }
// })
    




geocode('Boston', (error, data) => {
    log('Error', error)
    log('Data', data)
})