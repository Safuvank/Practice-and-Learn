

{
    var a = 10;
    let b = 20;
    const c = 30;
}

const obj = {
  value: 10,
  show: function() {
    console.log(this.value);
  }
}

obj.show()

let square = function (a){
    return a*a
}

console.log(square(5))


const double = x => x * 2;

console.log(double(10))


