const firstUserNumber = Math.floor((Math.random() * 6) + 1)
const secondUserNumber = Math.floor((Math.random() * 6) + 1)

if (firstUserNumber > secondUserNumber) {
    console.log(firstUserNumber)
    console.log(secondUserNumber)
    console.log("Il giocatore uno ha vinto!")
} else if (secondUserNumber > firstUserNumber) {
    console.log(firstUserNumber)
    console.log(secondUserNumber)
    console.log("Il giocatore due ha vinto!")
} else {
    console.log(firstUserNumber)
    console.log(secondUserNumber)
    console.log("Pareggio!Fate un altro tentativo")
}