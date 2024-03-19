// for of 

// ["", "", ""]
// [{},{},{}]

const arr = [2,3,4,6,5]

for (const i of arr) {
    // console.log(i);
}

const greeting = "Hello greeting"
for(const greet of greeting) {
    // console.log(`character is ${greet}`);
}


// Maps

const map = new Map()

map.set('IN','India');
map.set('USA','United state of America');
map.set('Fr','France');


// console.log(map);

for (const [key,value] of map) {
    // console.log(key ," :- ",value);
}
console.log("------------------------------------------");

for (const [key,value] in map) {
    console.log(key ," :- ",value);
}


const myObject = {
    "salman":"Ultimate",
    "Super" : "Superman",
    "Sultan" : "Ultimo",
}

// console.log(Object.keys(myObject));
// console.log(Object.values(myObject));
// console.log(Object.entries(myObject));

// const {instructer,  }

// for (const [key,value] of myObject) {
//     // console.log(key);
// }










