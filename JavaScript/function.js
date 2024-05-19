// function sum(a,b)              => normal function
// {
//     return(a+b);
// }
// let ans = sum(3,6);
// console.log(`answer=${ans}`);



// let sum = (a,b) => {            //=> arrow function (use for small function)
//     return (a+b);
// };
// let ans1 = sum(5,7);
// let ans2 = sum(2,4);
// console.log(`answer1 = ${ans1}`);
// console.log(`answer2 = ${ans2}`);


// let arr = [1,2,3,4,5]               // => Higher order method or function : function as a parameter pass kare ya 
//                                    //                                       function return kare 
// arr.forEach(function print(val){
//     console.log(val);
// })
// //  or
// arr.forEach((val)=>{
//     console.log(val);
// })


// let arr = [5,3,6,8,2,9]
// const max = arr.reduce((prev, curr)=>{
//     return prev > curr ? prev : curr;
// });
// console.log(max);


let marks = [97,78,99,89,93]
let toppers = marks.filter((val)=>{
    return val>90;
})
console.log(toppers);

