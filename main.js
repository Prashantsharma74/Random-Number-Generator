const p = document.querySelector("p")
const form = document.querySelector("form")

function getRandom(e) {
    e.preventDefault()
    const num = Math.random();
    p.innerText=num
}

form.addEventListener("submit", getRandom)
