const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;

const firstProductTotalPrice = firstProductPrice * firstProductQuantity
const secondProductTotalPrice = capProductPrice * capProductQuantity

////esto esm muy repetitivo
///para codigo repetitivo es ideal usar funciones
/**
 1.definicion
 2.lo que retorna
 3.parametros
 */

 function saludo(){
    console.log('Hola')
    return '';
 }

 ////otra forma de definir funciones 

 const saludo = function (){

 }

 ///funcion flecha o arrow ---> se pueden liberar las llaves y no ponerlas
const greeting = () => {
    console.log('hello')
}

greeting()
saludo()

//si llamo a greeting() se llama antes de la declaracion de la funcion , da un error

const calc = (price,Quantity) => {
    const result =  price * Quantity
    return result
}
//como retorna, le  puedo asignar a una variable, y se puede por el return 
const resultFirstProduct = calc(firstProductPrice, firstProductQuantity)

const resultSecondProduct = calc(capProductPrice,capProductQuantity)

const calcOneLine = (price,Quantity) => { price * Quantity} ///si la funcion nu es muy larga se puede hacer de esta manera, en una sola linea el return ya se ejecuta

//variante con parentesis
const calcOneLine1 = (price,Quantity) => ( 
    price * Quantity
);



let message = '';
// Verificando las condiciones para aplicar la promoción
if (selectedProduct === 'T-shirt' && selectedQuantity >= 2) {
  message = '¡Recibes un 10% de descuento en la segunda camiseta!';
} else if (selectedProduct === 'Cap' && selectedQuantity >= 3) {
  message = '¡Obtén una gorra gratis por la compra de 3!';
} else {
  message = 'No hay promociones para esta selección';
}

// ejemplo de funcionamiento

const result = tuFuncion('prod1', 12);
console.log(result); // No hay promociones para esta selección
