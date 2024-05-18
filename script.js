const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const alexaScore = document.querySelector('#alexa-score')

let humanScoreNumber = 0
let alexaScoreNumber = 0

const playHuman = (humanChoice) => {

    playGame(humanChoice, playAlexa())
}

const playAlexa = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, alexa) => {
    
    console.log('Humano: ' + human + ' Maquina: ' + alexa)

    if (human === alexa) {
        result.innerHTML = 'Deu Empate!'
    } else if (
    (human === 'paper' && alexa === 'rock') ||
    (human === 'rock' && alexa === 'scissors') ||
    (human === 'scissors' && alexa === 'paper')
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = 'Você ganhou!'
    } else {
        alexaScoreNumber++
        alexaScore.innerHTML = alexaScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa!'
    }

}