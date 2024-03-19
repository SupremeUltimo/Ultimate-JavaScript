// Hosting Concept

console.log(addone(4));
function addone(num) {
    return num+1
}

// ReferenceError: Cannot access 'addtwo' before initialization
console.log(addtwo(4));
const addtwo = function(num) {
    return num+1
}
