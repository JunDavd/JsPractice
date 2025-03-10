
const products = ['Cap','T-shirt','Shoes']

const showProduct = (product) => {
    console.log(`Producto: ${product}`)
}

showProduct(products[1])
/** showProduct(products[0])
showProduct(products[2])
showProduct(products[3])
*/
////esto de arriba es totalmente impractico, estar llamando, copiando y pegano

/**
 * for(),while(), do while()
 */

//problematica: estamos duplicando codigo y si la lsita cambia, pues hay que cambiar todo

/**
for(let i = 0; i < 10, i = i + 1) {
    console.log('dentro del for')
}

console.log('final script')
*/
///arriba si se ejecuta normal, sin un bucle infinito o un bucle muy pesado evita que el otro codigo asincronico se ejecute o se demore mucho en ejecutae

for (let index = 0; index < products.length; index ++){
    //debugger para ir al debugger de JS
    const product = products[index]
    showProduct(product)
}

////while puedo tener distintos incrementos
let counter = 0

while (counter < 10){
    console.log('tal tal')
    counter = counter + 1
}


/////for of recorre algo que se considere iterable, como un listado 


for (const product of products){
    console.log(product)
}

const data1 = ['test','test1']
const data2 = ['data','info']

const mergeInfo = [...data1, ...data2]

const numbers = [1,2,3,4,5]
let doubleNumbers = []
for(const number of numbers){
    doubleNumbers = [...doubleNumbers,number * 2];
    //doubleNumbers.push(number + 2)
}
console.log(doubleNumbers)

const users = [
    'user1@keepcoding.com',
    'user2@discord.com',
    'user3@keepcoding.com',
]

let hideEmailsKeepcoding = []
let keepcodingUsers = []

for (const user of users) {
    if(user.includes('@keepcoding')){
        keepcodingUsers = [...keepcodingUsers,user]
        hideEmailsKeepcoding = [...hideEmailsKeepcoding,user.replace('@keepcoding.com', '*****')]
    } else {
        hideEmailsKeepcoding = [...hideEmailsKeepcoding,user]
    }
    
}

console.log(hideEmailsKeepcoding,keepcodingUsers)


///////ARRAYS ----> es importante saber ingresar a la estructura y a cada elemento

const productsDisponiblesPromo = [
    [//promo 1 
        'T-shirt', //producto
        2, //cantidad
        'Descuento del 10%' //mensaje
    ], 
    [//promo 2
        'Cap',
        3,
        'Tercera gorra gratis'
    ]
] 

const promo1 = productsDisponiblesPromo[0]
console.log(promo1[2]) //descuento del 10%

console.log(productsDisponiblesPromo[0][1]) // accede a 2, la cantidad

console.clear()
const usersProducts = [
    ['PSP','TV'], //user 1
    ['Cap','T-shirt'], //user 2
    ['TV','iphone'] //user 3
]

let message = ''

for (const userProducts of usersProducts) {
    message = `${message} productos:` 
    for (const product of userProducts) {
        message = `${message}${product}`
    }
    message = `${message}\n`
}

console.log(message)
