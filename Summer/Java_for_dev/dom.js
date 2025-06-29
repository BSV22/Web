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
document.querySelector(".box").innerHTML=".innerHTML"
console.log(document.querySelector(".container").innerHTML)
console.log(document.querySelector(".container").innerText)
console.log(document.querySelector(".container").outerText)
console.log(document.querySelector(".container").nodeName)
console.log(document.querySelector(".container").tagName)
console.log(document.querySelector(".container").textContent)
console.log(document.querySelector(".container").hidden)
console.log(document.querySelector(".box").hidden=true)
console.log(document.querySelector(".box").hasAttribute("hidden"))
console.log( document.querySelector('.container').children[2].getAttribute('style'))
console.log( document.querySelector('.container').children[2].attributes)
console.log( document.querySelector('.container').children[2].removeAttribute('style'))
console.log( document.querySelector('.container').children[4].dataset)

// let div=document.createElement('div')
// div.innerHTML="I'm a created div <b> By BaSAVAKIRAN</b>"
// div.setAttribute('class', 'box')
// document.querySelector('.container').append(div)

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("beforebegin","<b>insertadjelement</b>")

let id = document.querySelector(".container").children[4].remove()
console.log(document.querySelector(".container").children[3].classList)
console.log(document.querySelector(".container").children[3].className)
document.querySelector(".container").children[3].classList.add('Box4')
document.querySelector(".container").children[3].classList.remove('Box4')
document.querySelector(".container").children[3].classList.toggle('Box4')//toggle : if the class is there than that will be removed and vice-versa

