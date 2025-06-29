
let text = ['Initializing Hacking', 'Reading Your Files', 'Password files Detected', 'Sending all Passwords and personal files to server', 'Cleaning up']



const randomdelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

const add = async (item) => {
    await randomdelay();
    let div = document.createElement('div')
    div.innerHTML = item;
    document.body.append(div)
}

async function main() {
    let t = setInterval(() => {
        let last = document.body.lastElementChild
        if (last.innerHTML.endsWith('...')) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + '.'
        }
    }, 700);

    for (const item of text) {
        // let div = document.createElement('div')
        await add(item)
        // dot()
    }
    await randomdelay()
    clearInterval(t)
}

main()