// Your code here

const dodger = document.getElementById('dodger')

document.addEventListener("keydown", function (e){
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})

document.addEventListener("keydown", function (e){
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left > 0) {
        dodger.style.left =`${left -1}px`
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '')
    const left = parseInt(leftNumbers, 10)

    if (left < 360) {
        dodger.style.left =`${left +1}px`
    }
}

// code to move dodger up and down

// document.addEventListener("keydown", function (e){
//     if (e.key === "ArrowUp") {
//         moveDodgerUp()
//     }
// })

// function moveDodgerUp() {
//     const botNumbers = dodger.style.bottom.replace('px', '')
//     const bottom = parseInt(botNumbers, 10)

//     if (bottom < 380) {
//         dodger.style.bottom =`${bottom +1}px`
//     }
// }

// document.addEventListener("keydown", function (e){
//     if (e.key === "ArrowDown") {
//         moveDodgerDown()
//     }
// })

// function moveDodgerDown() {
//     const botNumbers = dodger.style.bottom.replace('px', '')
//     const bottom = parseInt(botNumbers, 10)

//     if (bottom > 0) {
//         dodger.style.bottom =`${bottom -1}px`
//     }
// }