// 1.minutesToHours
// // Write a function named minutesToHours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours.

function minutesToHours(minutes) {
    return minutes / 60 ;
}

export { minutesToHours };


// 2.averageOf4Numbers
// Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    let average = (nr1 + nr2 + nr3 + nr4) / 4;
    return average;
}

export { averageOf4Numbers };
