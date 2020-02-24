const request = require('request')
const log = console.log
const url = 'https://api.darksky.net/forecast/68db5af343b1a89c046ae07c8b1226a0/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    // log(response.body.currently)
    const temp = response.body.currently.temperature
    const prob = response.body.currently.precipProbability
    const daily = response.body.daily.data[0].summary
    const message = `${daily} It is currently ${temp} degrees out. There is a ${prob}% chance of rain.`
    log(message)
})