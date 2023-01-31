function simpleNumbers (n) {
    simpleNumbers._array = []
    let simple = true
    let number = 2
    while (simpleNumbers._array.length < n) {
        for (i of simpleNumbers._array) {
            if (number%i === 0) {
                simple = false
                break
            }
        }
        if (simple) {
            simpleNumbers._array.push(number)
        }
        number++
        simple = true
    }
    return simpleNumbers._array
}

console.log(simpleNumbers(process.argv[2]))