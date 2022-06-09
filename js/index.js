let firstCard = 5
let secondCard = 7
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let message = ""
messageEl = document.getElementById("message-el")
// console.log(messageEl)

sumEl = document.getElementById("sum-el")
// console.log(sumEl)

cardsEl = document.getElementById("cards-el")


function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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

function startGame() {
    renderGame()
}

function newCard() {
    console.log("Drawing a new card from the deck...")
    let newCard = 7
    sum += newCard
    renderGame()
}