// A hashtable in javascript is a object that takes a key
// and value pair

const object = {
  first: 1,
  second: 2,
  third: 3,
};

/*
console.log(object.first);
console.log(object.second);
console.log(object.third);

console.log(Object.keys(object));
console.log(Object.values(object));
for (const [key, value] of Object.entries(object)) {
  console.log(key, value);
}
*/

// similar to a js object, however, the key field is
// restricted to integer, strings, and symbols, whereas,
// in maps, the key field can be of any data type, such
// as objects, arrays, integers, etc
const map = new Map();

// similar to a js object, only contains keys
const set = new Set();

// common interview excercises
// 1. Google Question - Return first reoccuring number
// using a hashmap

function identifyReoccur(arr) {
  const map = {};
  // iterate through the array and store each value
  // into a object/hashmap with values of zero
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let [key, value] of Object.entries(map)) {
      if (arr[i] == key) {
        map[key]++;
      }
    }
  }

  for ([key, value] of Object.entries(map)) {
    if (value > 1) {
      console.log(key, value);
      return key;
    }
  }
}

identifyReoccur(["c", "d", "d", "a", "z", "a", "z"]);
