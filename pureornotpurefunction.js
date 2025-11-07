//pure or not 

// it is not pure function because of the function mutate the original data


let fruit = {
    name : "banana",
    color : "green"
}

let ripe = (item) => {
    item.color = "yellow"
    return item
}

let ripedBanana = ripe(fruit)

console.log(ripedBanana)
console.log(fruit)
