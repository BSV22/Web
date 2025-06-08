let arr = [1,2,3,4,6]
arr[3]=33
console.log(arr, typeof arr)
console.log(arr.length)
console.log(arr[4])
console.log(arr.toString())
console.log(arr.join(' And '))
let a=[1,2,3,4,5,6]
console.log(a.pop())
a.push(100)  // returns length 
console.log(a)
a.push('Basavakiran')
console.log(a)
console.log(a.shift())
console.log(a)
a.unshift('jack')
console.log(a)
delete a[3]
console.log(a)
a.length
console.log(a[3])
let b=[1,2,3]
let c=[4,5,6]
let d=[7,8,9]
b.concat(c,d)
console.log(b.concat(d,c))
console.log(b)
let e=[2,3,25,8,2,63,46,8,3,7,4]
console.log(e.sort())

let numbers=[1,2,3,4,5,6]
numbers.splice(1,3,222,444)
console.log(numbers)
// console.log(numbers.splice(1,3,222,444))
numbers.slice(2,4)
console.log(numbers)
console.log(numbers.slice(2,4))
console.log(numbers)

let new_arr=[]
let ba= [1,43,24,434,24,3]
for (let index = 0; index < ba.length; index++) {
    const element = ba[index];
    new_arr.push(element**2)
    console.log(new_arr)
}

let new_b=arr.map(e=>{
    return e**2
})
console.log(new_b)


const greaterThan7=(e)=>{
    if ( e> 7)
        return true
    return false
}

console.log(new_b.filter(greaterThan7))


let fac=[1,2,3,4,5,6,7]
const red= (a,b)=>{
    return a*b
}
console.log(fac.reduce(red))

console.log(Array.from("Basavakiran"))