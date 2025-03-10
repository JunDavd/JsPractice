const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const paresImpares = (numbers) => {
    const validNumbers = numbers.filter((num) => typeof num === 'number' && !isNaN(num));
    const pares = validNumbers.filter(number => number % 2 == 0)
    const impares = validNumbers.filter(number => number % 2 == 1)
    return {pares, impares}
}

const {pares, impares} = paresImpares(numbers) // no devolver result sino un destructuring con par e impar
console.log(pares, impares)