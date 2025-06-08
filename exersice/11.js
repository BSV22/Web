let x=5
// let arr = []
// for (let i=0;i<x;i++){
//     arr[i]=i+1
// }
let arr=Array.from(Array(x+1).keys()).slice(1).reduce((a,b)=>a*b)


console.log(arr)
// const red=(a,b)=>{
//     return a*b
// }
// console.log(arr.reduce(red))