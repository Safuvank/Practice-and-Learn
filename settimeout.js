const interval = setInterval(()=>{
    console.log("Running")
},1000)

setTimeout(()=>{
    clearInterval(interval)
},10000)

let count = 0;

const interval2 = setInterval(()=>{
    count++;
    console.log(count)


    if(count === 8){
        clearInterval(interval2)
    }
})

let timer

function search(){
  clearTimeout(timer)

  timer = setTimeout(()=>{
    console.log("Searching...")
  },500)
}

search()