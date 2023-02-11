const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

const util = require('util');

const question = function question(text) {
    return new Promise((resolve, reject) => {
        rl.question(text, (answer) => {
            resolve(answer)
        })
    })
}

function guessNumber() {
    let number = Math.floor(Math.random() * 100)
    console.log(number)
    return async function userGuess(text = 'Guess the number: ') {
        let answer = await question(text);
        if (answer > number) {
            userGuess('Bigger! Try again: ')
        } else if (answer < number) {
            userGuess('Smaller! Try again: ')
        } else if (!isNaN(answer)) {
            console.log('Good job!')
            rl.close()
            return
        }
        userGuess();
    }()
}

guessNumber()