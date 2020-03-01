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

    


    




// geocode('Boston', (error, data) => {
//     log('Error', error)
//     log('Data', data)
// })




forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })