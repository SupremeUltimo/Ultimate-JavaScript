const userEmail = "Ultimo@gmail.com";


if (userEmail) {
    console.log("got User Email");
}else{
    console.log("don't have user email");
}


// falsy
// false  0  -0 Bigint 0n , "" , null, undifined, NaN

//truthy values.
// "0" , 'false' , " ", [] , {} , function(){}
 

if(userEmail.length === 0){
console.log("array is empty");
}

const emaptyObject = {}

if(Object.keys(emaptyObject)){
    console.log("object is empty");
}



//  Nullish coalescing operator (??) : null undefined

let val = 44;

val = 22 ?? 10
val = null ?? 10
val = undefined ?? 10

console.log(val);

