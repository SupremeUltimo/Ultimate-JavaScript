// for of loop

const programming = ["js","CSS","blockchain","Ai/ML","Node"]
for (const value in programming) {
    console.log(programming[value]);
}
for (const value of programming) {
    console.log(value);
}


// For in loop

let myObject = {
    js:"javascript",
    Cpp:"C++ language",
    rb:"ruby",
    swift:"swift by apple"

}

for (const key in myObject) {
    console.log(`Key: ${key}  ===    value: ${myObject[key]}`);
}

