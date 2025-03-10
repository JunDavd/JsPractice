/**
 esto es un comentario
 */

const producto = 'T-shirt';
const quatity = 10;

const secondProductForUser = 'cap';

/**
 cammmelCase
 snake_case
 PaskalCase
 */

 let secondProductQuantity = 20;

 console.log(secondProductQuantity);

 secondProductQuantity = 10;

 console.log(secondProductQuantity)

 //let secondProductQuantity = 13; #####esto da un error, se debe reasiganar sin el let

 ///TIPOS DE DATOS

 let message = 'hola keepcoding';
 message = 'hola keepcoding';
 message = 'hola "keepcoding"';
 //message = 'i don't know'; 

 const template = `
 Producto: ${producto}
 Quantity: ${quatity}
 `
 console.log(template)
 const discount = 2.25;

 console.log(typeof discount)

 const soldOut = false
 console.log(typeof soldOut)

 const stock = null; // no hay nada, por ejemplo podrias tener un papel higienico que se vacio, el proceso seria rellenar el espacio de papel con mas papel
 const noProduct = undefined; //no existe, no se ha definido en el codigo. No esta contemplado y probablemente lanzas un error 

 //stock = Infinity //tipo que no se usa mucho
 
 //symbol----> es un tipo muy especifico y especializado para crear librerias

 const notANumber = NaN; //intentas restar 10 - 'Hola'

 ///operadores
 console.clear

 console.log(true + true) //2
 console.log(20%0) //0
 console.log(12 == 12) //true
 ///en javascript hay problemas con la comparacion no estricta ==
 console.log('12' == 12)
 console.log('12' === 12) // false
 console.log('12' !== 12)

 console.log(1 <= 2)
 //console.log(firstProductPrice > capProductPrice) esto por ejemplo uno puede hacer comparaciones para establecer descuentos 
 
 const invalidPrice = NaN
 console.log(invalidPrice === NaN) //false  NaN no es igual NaN
 console.log(isNaN(invalidPrice)) //true

 // && --> and
 // || or

 console.log(null === null) //no hay problema en eso
 console.log(undefined === undefined)//no hay problema

 //caracter coma ,

 const thirdProduct = 'pants', thirdProductPrice = 12, thirdProductQuantity = 1 //se asigna const a cada una de las variables

 console.log('12' === ' 12') //Diferente

 const isOnline = true
 console.log(!isOnline) // inonline es true ahora puedes si !isonline como si dijero si no esta online true

 
