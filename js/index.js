let firstCard = 4
let secondCard = 8

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let message = ""

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Blackjack!"
        hasBlackjack = true
    } else {
        message = "LOSER!"
        isAlive = false
    }
    
    console.log(message)
}
