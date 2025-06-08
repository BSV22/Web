document.body.children[0].children[2].style.backgroundColor="green"
// let b2=document.getElementsByClassName("box")
// console.log(b2)
// b2[1].style.backgroundColor="red"

document.getElementById('hi').style.backgroundColor='red'

document.querySelector('.que').style.backgroundColor='red'

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor='blue'
// })

// querySelectorAll=array

let a=document.getElementsByTagName("div")
console.log(a)
console.log(a[2].matches("#hi"))
console.log(a[3].closest('.container'))
console.log(document.querySelector('.container').contains(a[4]))