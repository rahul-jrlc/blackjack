let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false

let message = ""
messageEl = document.getElementById("message-el")
sumEl = document.getElementById("sum-el")
cardsEl = document.getElementById("cards-el")

let player = {
    name: "Tinku",
    chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {    
    let randomCardNumber = Math.floor(Math.random()*13) + 1
    if (randomCardNumber === 1) {
        return 1
    } else if (randomCardNumber > 10) {
        return 11
    } else {
        return randomCardNumber
    }
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
    isAlive = true   //ONLY AFTER CLICKING START GAME DOES THE USER BECOME "ALIVE" IN THE GAME
    let firstCard = getRandomCard()  //RANDOM CARDS ARE GENERATED ONLY AFTER STARTING THE GAME, NOT BEFOR(ON OPENING THE GAME PAGE ITSELF)
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {  //ONLY GENERATE NEW CARD IF PLAYER HAS STARTED THE GAME AND DOES NOT HAVE BLACKJACK
        console.log("Drawing a new card from the deck...")
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
}
 }
    