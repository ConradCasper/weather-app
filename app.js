const request = require('request')

const url = 'https://api.darksky.net/forecast/68db5af343b1a89c046ae07c8b1226a0/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})