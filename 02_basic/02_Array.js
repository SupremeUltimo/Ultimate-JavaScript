const Marvel_Heroes = ["Black Widow", "Thor","Hulk"];
const DC_Heroes = ["Superman","Shazam"];

// const heros =  Marvel_Heroes.push(DC_Heroes);
// console.log(Marvel_Heroes);

const heros1 =  Marvel_Heroes.concat(DC_Heroes);
// console.log(heros1);
// // sprade Operator
console.log([...Marvel_Heroes,...DC_Heroes]);

// Concate Two array  
// const arr1 =  [2,3,2,7]
// const arr1 =  [4,4,3,2]
// push : not concat add only one element added nhi toh [2,3,2,[4,4,3,2],7];

// concat : Concat two array [2,3,2,4,4,3,2,7];
// spread Operator : Concat two array [2,3,2,4,4,3,2,7];


// Flat Array 
// const array = [2,3,2,[4,4,3,2],7,[3,42,5,[3,5,[3,4],4,53],3]]
// console.log(array.flat(Infinity));


console.log(Array.isArray("SHEHBAZ"));
console.log(Array.from("SHEHBAZ"));
console.log(Array.from({name:"SHEHBAZ"}));  //interesting


const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1,score2,score3));

