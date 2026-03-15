const config = {
    api: "http://api.com",
    timeout: 5000
}

Object.freeze(config)

config.timeout = 6000;

console.table(config)


const student = {
    name: "safuvan",
    course: "degree",
    isActive: true,
    district : "Malappuram",
    state: "Keralam"
}


Object.seal(student)

student.name = "shihab"
student.age= 20

console.table(student)

// task

const settings = {
    theme : "dark",
    language: "en"
}

Object.seal(settings)

settings.theme = "light"

delete settings.language

console.table(settings)

// remove property 

const user = {
    name: "Ali",
    age: 20,
    city:"Kochi"
}

delete user.age
console.table(user)