//  IIFE (Immediately Invoked Function Expression)

// why IIFE
// we have many polution with global scope we need to execute 

// (function chai(){
//     // named IIFE
//     console.log(`DB connected`);
// })();

// ( () =>{
//     console.log(`DB connected`);
// })();


(function Hello() {
    console.log("SHEHBAZ");
})();


( (name) => {
    console.log(`DB Connect Two ${name}`);
})("Shehbaz");



