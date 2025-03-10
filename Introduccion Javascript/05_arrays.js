const firstProductName = 'T-shirt'
const capProductName = 'Cap'

//en js las listas no tienen problemas de estar combinadas con varios tipos

const products = ['T-shirt',capProductName,'shoes','tv'];
const prices = [1,2,3,40]

//operaciones
//acceso a sus elementos
console.log(products[3].toLocaleLowerCase().includes())
console.log(products[4]) //undefined
//añadir a la list
products.push('PS5')
//products.unshift() ---> para añadir el elemento al principio
console.log(products)
//borrar
products.pop() //borra el ultimo elemmento
products.shift()//borra el primer elemento
//modificar su orden
console.log(products.reverse()) //revierte el orden
console.log(products.includes('shoes'))//busca un elemento en la lista

const shoesPosition = products.indexOf('shoes') //si no existe es -1 si existe devuelve el indice en dodne esta el elemento
console.log(products.splice(shoesPosition,1))

/////HACER ESTO COMO UNA FUNCIÓN
const csvItems = 'PS5,switch,xobx,PC,PSP'
const csvProducts = csvItems.split(',')
csvProducts.pop()
csvProducts.shift()
const newCsvItems = csvProducts.join(',')
.toString

/**
 * importante
 */

const productUser1 = ['Tv','PC','PS5']
const productUser2 = productUser1  ///por ejemplo a un usuario que quiere pegar los objetos comprados de otro usuario

const addProduct =(newProduct, productList) =>{
    productList.push(newProduct)
}

addProduct('cap',productUser2)

console.log(productUser2)
console.log('2',productUser2)
console.log('1',productUser1)

////arriba hay muchas malas practicas, se le esta cambiando el listado y se esta afectado product2
////ARREGLAR 
///para hacer copias de array poner ...
///te da una copia al original, cualquier odificacion que hagas, es solo ahi, no en el original


const productUser3 = ['Tv','PC','PS5']
const productUser4 = [...productUser1]  ///se utilizan los 3 puntos que funcionan como una concatenacion de los valores de la original al valor nuevo

const addProduct1 =(newProduct, productList) =>{
    const newProducList = productList
    newProducList.push(newProduct)
    return newProducList
}

addProduct('cap',productUser2)

console.log(productUser4)
console.log('2',productUser4)
console.log('1',productUser3)

///pero todavia quiero que siempre me devuelva el mismo resultado, que la lista que se modifica adentro sea una imagen con el spread operator
const productUser5 = ['Tv','PC','PS5']
let productUser6 = [...productUser1]

const addProduct2 =(newProduct, productList) =>{
    const newProducList = [...productList]
    newProducList.push(newProduct)
    return newProducList
}

productUser6 = addProduct('cap',productUser6)

////ejercicio 3 de la practica 

const input = [
    'Downloads',
    'videos',
    'capture',
    'mp4'
]

const transfor = (list) =>{
    return list.join('/')
}

transfor(input)