function sum(a, b, c = 3) {
    return a + b + c
}
r = sum(2)
console.log(r)

const func1 = (x)=>{
    console.log("I am a arrow function ", x)
}
func1(2)