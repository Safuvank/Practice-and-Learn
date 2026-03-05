// Learning Proxy

//original object called (target)
const user = {
  name: "john Doe",
  age: 30,
  place: "NewYork",
};


const handler = {
    get(thab,prope){
        console.log( `Accessing property: ${prope}`)
        return thab[prope]
    }
}

const proxy = new Proxy(user,handler)

console.log(proxy)
console.log(proxy.age)



// REal World use cases

const person = {
    age: 20
}


const realHandler = {
    set(target,prop,value){
        if(prop === "age" && value <= 10){
            throw new Error("Age cannot be negative")
        }
        target[prop] = value;
        return true;
    }
}


const proxyPerson = new Proxy(person,realHandler)

proxyPerson.age = 11;
console.log(proxyPerson.age)

