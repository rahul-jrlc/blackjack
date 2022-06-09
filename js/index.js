let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let message = ""
messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

function getRandomCard() {
    let randomCardNumber = Math.floor(Math.random()*13) + 1
    return randomCardNumber
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
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
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}