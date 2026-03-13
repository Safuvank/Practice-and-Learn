// "use strict"

// function greet (){
//     console.log(this)
// }


// greet()



// CALL

    function greet(city){
        console.log("Hello, " + this.name + "from " + city)
    }

    const user = {name: "safuvan"}

    greet.call(user,"dubail")