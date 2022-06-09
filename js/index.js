let firstCard = 10
let secondCard = 11

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let message = ""
messageEl = document.getElementById("message-el")
// console.log(messageEl)

sumEl = document.getElementById("sum-el")
// console.log(sumEl)

function startGame() {
    sumEl.textContent = sumEl.textContent + " " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "BLACKJACK!"
        hasBlackjack = true
    } else {
        message = "LOSER!"
        isAlive = false
    }
    
    messageEl.textContent = message
    console.log(messageEl)
}
