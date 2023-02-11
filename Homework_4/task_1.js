function getPasswordChecker(password) {
    return (guess) => password == guess
}

let password1 = getPasswordChecker('hello')
let password2 = getPasswordChecker('world')

console.log(password1('world'))
console.log(password1('hello'))

console.log(password2('world'))
console.log(password2('hello'))