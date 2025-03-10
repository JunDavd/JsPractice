export const calculadora = () => {
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

export const variable = 'hola' //1 forma

const utilsfile = 'name'

export default utilsfile