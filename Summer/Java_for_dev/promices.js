console.log('Hi');
let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("you are rejected")
    }
    else {
        setTimeout(() => {
            console.log('Yes im Done');
            resolve("All Done")

        }, 3000);
    }

})
prom1.then((a) => {
    console.log(a);

}).catch((err)=>{
    console.log(err );
    
})