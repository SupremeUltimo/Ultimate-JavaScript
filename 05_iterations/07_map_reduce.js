// const myNums = [1,2,3,4,5,6,7,8,9,10] 

// // const myNewNum = myNums.map((num)=>num+10)

// const myNewNum = myNums
//                     .map((num)=>num+10).map((num)=>num+2).filter((num)=>num>=17)
// console.log(myNewNum);



const myNum = [1,4,3];

const mytotal = myNum.reduce((acc,crrval)=>{
    console.log(`Acc: ${acc} and currentvalue ${crrval}`);
    return acc+crrval;
},0)

console.log(mytotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 29
    },
    {
        itemName: "py course",
        price: 99
    },
    {
        itemName: "mobile dev course",
        price: 59
    },
    {
        itemName: "data science course",
        price: 129
    },
]


const totalPrice =  shoppingCart.reduce((acc,item)=>{
    return acc+item.price;
},0)


console.log(totalPrice);

