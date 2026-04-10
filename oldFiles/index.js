function createUser (name,age, place){
    return {
        name,
        age,
        place
    };
}

const user1 = createUser("safuvan",12,"valakkulam")
console.log(user1)



function createCandidate (name, age){
    return {
        name,
        age,
        sayHello(){
            console.log("Hello, " + name)
        }
    }
}

const cand = createCandidate("safuvan",10)
console.log(cand.sayHello())