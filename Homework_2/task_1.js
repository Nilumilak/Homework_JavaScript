function simpleNumbers (n) {
    simpleNumbers._array = []
    let number = 2
    while (simpleNumbers._array.length < n) {
        if (number === 2 || number === 3 || number === 5) {
            simpleNumbers._array.push(number)
        } else if (number%2 !== 0 && number%3 !== 0 && number%5 !== 0) {
            simpleNumbers._array.push(number)
        }
        number++
    }
    return simpleNumbers._array
}

console.log(simpleNumbers(process.argv[2]))