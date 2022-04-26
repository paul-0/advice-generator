let btn = document.getElementById("generate")
let advice = document.getElementById("advice")
let slipId = document.getElementById("slip-id")

btn.onclick = function () {
    advice.classList.replace( "visible", "invisible")

    fetch("https://api.adviceslip.com/advice")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            advice.innerText = data.slip.advice
            slipId.innerText = data.slip.id
            advice.classList.replace( "invisible", "visible")
        })
}