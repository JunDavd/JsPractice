/**
 * multiplicando math random por un numero, el maximo del numero sera n-1, si quiero que llegue hasta ese numero, sumo + 1
 */

// let randomNum = Math.floor(Math.random() * 6)
// console.log(randomNum);

/**
 * pero, si quiero tener dos variables con el min y max de los valores
 * voy a tener que hacer lo siguiente
 */

let max = 100
let min = 50

let randomNum = Math.floor(Math.random() * (max - min)) + min
console.log(randomNum);