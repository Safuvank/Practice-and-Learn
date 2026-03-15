const obj = {
  123123: "id card",
  firstName: "safuvan",
  lastName: "K",
  121212: "Cic rol",
  place: "Malappuram",
  state: "Kerala",
  country: "India",
  94563: "Phone key",
  45: "roll",
};

console.log(obj);

const id = Symbol("id");

const user = {
  name: "Ahmed",
  [id]: 123,
};

console.log(Object.entries(user));

const student = {
  1: "one",
  1: "two",
  1: "three",
};

console.log(student);

const map = new Map();
const arr = {
  name: "ali",
};

map.set("name", "ali");
map.set(123, "id card");
map.set(arr, "123");
map.set(true, "isActive");

console.log(map.size);

// tricky

const map1 = new Map();

map1.set({}, "first");
map1.set([], "second");
map1.set([], "third");

console.log(map1.size);

// return max key

const mark = {
  safuvan: 80,
  adil: 90,
  murshid: 89,
  muhsin: 77,
};

function maxMark(mark) {
  let max = -Infinity;

  let key;

  for (let k in mark) {
    if (mark[k] > max) {
      max = mark[k];
      key = k;
    }
  }

  return key;
}

console.log()