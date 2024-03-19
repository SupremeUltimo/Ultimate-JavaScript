// const arr = [1,6,4,2,3,5];
// console.log(arr.length);
// console.log(arr);

//add element in last of array 100 and provide length of extended array
// console.log(arr.push(100)); 
// console.log(arr);

//remove from last element 100 //return extended value
// console.log(arr.pop()); 
// console.log(arr);

// provide length of extended array  
// Add elements at index 0 at start
// console.log(arr.unshift(88));
// console.log(arr);

// remove elememt at start
// console.log(arr.shift());
// console.log(arr);


// return true is element include in array
// console.log(arr.includes(4));
// console.log(arr);

// reverse method reverse original array returns array
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

// find 4 at indexes return index number // if value not exist  return -1 always
// console.log(arr.indexOf(1));
// console.log(arr.join("-"));

// join dtype is string and replace all elements gap through "-" string. 
// console.log(typeof arr.join("-"));
// console.log(arr); 

// slice and splice

// slice exclude end value
// slice(start,end)
const arr1 = [1,6,4,2,4,6,8,9,3,5];
console.log(arr1);
console.log(arr1.slice(2,5));
console.log(arr1);






// Diffrence b/w slice and Splice
const arr = [1,6,4,9,3,5];
console.log("A :",arr);
// splice
console.log("Slice B: ",arr.slice(1,3));   // exclude 3 in slice
console.log("B :",arr);
console.log("Splice C: ",arr.splice(1,3));   // include 3 in splice
console.log("C :",arr);

// Explain: 
// Slice : are Not-Manipulate , exclude 3 in slice
// Splice : are Manipulate , include 3 in slice












