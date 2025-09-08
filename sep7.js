{
    var c = 50;
    const b = 100;
    let a = 15;
    console.log(a,b)
}
console.log(c)


// callback function

function greet (name,callback){
    console.log("Hello "+name)
    callback()
}
function salaam(salaam){
    console.log("The inner function Executed");
}

greet("safuvan",salaam)

//anagram

function checkAnagram(word1,word2){
    if(word1.length !== word2.length){
        return "It is not anagram";
    }
   if(word1.split("").sort().join("") === word2.split("").sort().join("")){
    return "It is anagram"
   }
}

console.log(checkAnagram("silent","listen"))

//

