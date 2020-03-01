const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const log = console.log


const address = process.argv[2]

if(!address){
    log('Please enter an adress.')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {
        
        if(error){
           return log(error)
        } 
    
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return log(error)
            }
    
            log(location)
            log(forecastData)
          })
    })
    
}












    


    



