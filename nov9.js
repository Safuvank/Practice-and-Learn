// Date 09 / 11 / 2025

// 1.	Write a function countVowels(str) that returns how many vowels are in the string.

// Example:
// Input: "hello"
// Output: 2

// Input: "javascript"
// Output: 3
// (a, a, i)

// Input: "sky"
// Output: 0

// Input: "education"
// Output: 5
// (e, u, a, i, o)

// Input: "apple"
// Output: 2
// (a, e)

// Input: "beautiful"
// Output: 5
// (e, a, u, i, u)

// Input: "code"
// Output: 2
// (o, e)

// You just need to check for a, e, i, o, u (lowercase only for now).
// No fancy methods needed. Just loops and if-conditions.



function countVowels(str) {
    const strg = str.toLowerCase().split("")
    const vowels = ["a","e","i","o","u"]
    let result = 0;
    
    for(let i = 0 ; i< strg.length ; i++){
        for(let j = 0 ; j< vowels.length ; j++){
             if(strg[i] === vowels[j]){
            result = result + 1
        }
        }
        
    }return result
}

console.log(countVowels("javascipt"))
console.log(countVowels("hello"))
console.log(countVowels("education"))
console.log(countVowels("apple"))
console.log(countVowels("beautiful"))
console.log(countVowels("code"))
console.log(countVowels("sky"))
console.log(countVowels("APPLe"))




