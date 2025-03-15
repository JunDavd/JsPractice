
const foo = (...params) => {
    let resultado = 0
    for (const param of params) {
        result += param
    }
    return resultado
}

console.log(sum(1,2,3,4,5,6,))



/////cierres ---< funciones que dentro hay otras funciones que solo acceden a variables dentro de la funcion
//son variables privadas


const counter = () => {
    let count = 0;

    const increment = () => {
        count = count + 1
    }

    const log = () => {
        return count
    }

    return {
        incremento: increment,
        mostrarPorPantalla: log,
    }
}

const player1Score = counter() // devuelve un {incremento, mostrarpantalla}

const player2Score = counter()


const storeProducts = [
    {id: 'p001', name: 'T-shirt', price: 20, quantity: 2}
    {id: 'p002', name: 'Cap', price: 5, quantity: 1}
    {id: 'p002', name: 'Jeans', price: 40, quantity: 3}
]

const cart = () => {
    let products = []

    const addProduct = (product) => {
        products = [...products,product]
    }
    const listProducts = () => {
        return products
    }

    return {
        addProduct,
        listProducts,  ///clave y valor son lo mismo pues se deja uno
    }
}

const user1 = cart()
user1.addProduct(storeProducts[1])
const user2 = cart()

for (const element of products) {
    if(product.price <= 20) {
        user2.addProduct(products)
    }
}


console.log(
    user1.listProducts()
    user2.listProducts()
)


/////IMPORTANTE, FUNCIONES COMO PARAMETROS

const operations = (num1,num2, operation = 'suma') => {
    if (operation === 'suma') return num1 + num2;
    else if (operation === 'resta') return num1 - num2; ///hay muchas operaciones matematicas, entre mas caminos tenga, cuando pruebes vas a tener que probar que pasa en cada camino, es una prueba mas

}

operations(1,2) //3 y tocaria probar asi con todo

const suma = (num1, num2) => num1 + num2
const resta = (num1,num2) => num1 + num2

const operationsV2 = (num1,num2, operation) =>{
    return operation(num1,num2) ///aqui va 
}

let result = operationsV2(1,5, resta) //1pra forma

result = operationsV2(2,4, (num1, num2) => num1 - num2)//2da forma

///generalmente la utilizacion de 1 o 2 es de metodos o funciones que creamos nosotros mismos

/////