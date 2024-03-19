// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task 
//     // DB calls,cryptography, network

//     setInterval(()=>{
//         console.log("Async task is complete");
//         // resolve();
//     },3000);

// });

// promiseOne.then(()=>{
//     console.log("Promise consumed");
// })


// new Promise(function(resolve,reject){
//     setInterval(()=>{
//         console.log("Async task 2 is complete");
//         resolve();
//     },3000);

// }).then(()=>{
//     console.log("Promise 2 consumed");
// })



// const promisethree = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async task 1 is complete");
//         resolve({username:"Chai", email:"Shehbaz"});
//     },2000)
// })

// promisethree.then((user)=>{
//     console.log(user);
// })



// const promisefour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if (!error) {
//             resolve({username:'Shehbaz', password: '123'});
//         }else{
//             console.log("ERROR : something went wrong");
//         }
//     },2000)
// })

// promisefour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Always return either promise is resolve or reject");
// })




const promisefive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({languagename:'Javascript', password: '123'});
        }else{
            console.log("ERROR : something went wrong");
        }
    },2000)
})


async function consumePromisefive(){
    try {
        const responce = await promisefive;
        console.log(responce);
        console.log(responce.languagename);
        console.log(responce.password);
    } catch (error) {
        console.log(error);
    }
}

consumePromisefive();



console.log("============================================");

// async function getAllUser(){
//     try {
//       const responce = await fetch("https://jsonplaceholder.typicode.com/users");
//       //   console.log(responce);
//       const data = await responce.json();
//       console.log(data);
//     } catch (error) {
//         console.log("Error" , error);
//     }
// }
// getAllUser();

console.log("============================================");


fetch('https://jsonplaceholder.typicode.com/users').then((responce)=>{
    return responce.json();
}).then((data)=>{
    console.log(data);
    console.log(data[0].address.zipcode);
}).catch((err)=>{
    console.log(err);
})










console.log("============================================");





