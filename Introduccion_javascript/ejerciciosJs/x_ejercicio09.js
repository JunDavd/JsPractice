


const calculadora = () => {
    let result = 0

    function sumar (number) {
        result = result + number
    }

    function restar(number) {
        result = result - number
    } 

    function multiplicar(number) {
        result = result * number
    }
    function dividir(number) {
        result = result / number
    }

    const total = () => {
        return result
    }

    return{
        sumar,
        restar,
        multiplicar,
        dividir,
        total,
    }
}

/// si es funcion flecha y es un solo parametro, se pueden obviar los parenteses const   = num => {}

const miCalculadora = calculadora();

console.log(miCalculadora.sumar(5)); // Debería imprimir undefined
console.log(miCalculadora.restar(2)); // Debería imprimir undefined
console.log(miCalculadora.multiplicar(4)); // Debería imprimir undefined
console.log(miCalculadora.dividir(2)); // Debería imprimir undefined
console.log(miCalculadora.sumar(10)); // Debería imprimir undefined
console.log(miCalculadora.total()); // Debería imprimir 16

////////////



