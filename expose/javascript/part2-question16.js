let statistics = {
    redCars: 21, 
    blueCars: 45, 
    greenCars: 12, 
    raceCars: 5, 
    blackCars: 40, 
    rareCars: 2, 
}

for (const prop in statistics){
    if (prop[0].toLowerCase() == 'r'){
        console.log(prop, ': ', statistics[prop]);
    } else if (statistics[prop] % 2 == 1){
        console.log(prop, ': ', statistics[prop]);
    }
}

