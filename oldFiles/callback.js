function greet (name, thabsheer){
    console.log("Hello, " + name)
    thabsheer()
}

function callba (){
    console.log("callback")
}

greet("Ali",callba)