// arr=[36,35,25,35,29]
// let sum=0
// let total=200
// for(let a of arr)
//     {
//        sum+=a 
//     }
// console.log(sum/total)

// let price = [350,539,999,870,500]
// for(let i=0; i<5;i++)
//     {
//         let offer=price[i]/10
//         price[i]-=offer
//     }

//         console.log(price)


let arr=[1,2,3,4,5,6,7]
arr.splice(2,5,102,103,104);  //arr.splice(starting index, no.of element to be deleted, e1, e2, e3...)e1, e2, e3... are element to be added
arr.splice(1,0,99);
arr.splice(5,1)
arr.splice(2)