const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const log = console.log


geocode('Boston', (error, data) => {
    log('Error', error)
    log('Data', data)

    forecast(data.latitude, data.longitude, (error, data) => {
        log('Error', error)
        log('Data', data)
      })
})








    


    



