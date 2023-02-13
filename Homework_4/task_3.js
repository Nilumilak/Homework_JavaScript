const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })

const util = require('util');

const question = function question(text) {
    return new Promise((resolve, reject) => {
        rl.question(text, (answer) => {
            resolve(answer)
        })
    })
}

async function guessNumber() {
    let number = Math.floor(Math.random() * 100)
    console.log(number)
    let answer = await question('Guess the number: ');
    while (true) {
        if (answer > number) {
            answer = await question('Bigger! Try again: ')
        } else if (answer < number) {
            answer = await question('Smaller! Try again: ')
        } else if (!isNaN(answer)) {
            console.log('Good job!')
            rl.close()
            return
        }
    }
}

guessNumber()