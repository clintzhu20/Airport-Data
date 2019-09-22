const airportData = require('airport-data')

const ctu = airportData.find(function(airport){
    return airport.iata === "CTU"
});

for(ii = 0; ii < airportData.length; ii++){
    const airport = airportData[ii]

    if(airport.iata === "CTU"){
        console.log('---------------------')
        console.log(airport)
        console.log('---------------------')
    }
}

console.log(ctu)


