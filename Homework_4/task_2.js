const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

function guessNumber() {
    let number = Math.floor(Math.random() * 100)
    console.log(number)
    return function userGuess(text = 'Guess the number: ') {
        rl.question(text, (answer) => {
            if (answer > number) {
                userGuess('Bigger! Try again: ')
            } else if (answer < number) {
                userGuess('Smaller! Try again: ')
            } else if (!isNaN(answer)) {
                console.log('Good job!')
                rl.close()
                return
            }
            userGuess()
        })
    }()
}

guessNumber()

