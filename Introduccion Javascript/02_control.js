console.log(2)
const firstProductName = 'T-shirt';
const firstProductPrice = 15;
const firstProductQuantity = 2;

const capProductName = 'Cap';
const capProductPrice = 35;
const capProductQuantity = 2;


firstProductPrice > capProductPrice // -> boolean 
let message = ''
const sameQuantity = firstProductQuantity < capProductQuantity
if (firstProductPrice < capProductPrice) {
    const nota = 'ejemplo' //nota es definido  si cambio a var, ya no da error
    message = `producto ${firstProductName} tiene mejor precio que el ${capProductName}`
} else if (sameQuantity){
    message = 'misma cantidad'
}
else { 
    message = `producto ${firstProductName} es mas caro que el ${capProductName}`
}
console.log(message) //console.log(message,nota)nota solo esta definida dentro de la funcion

const sameName = firstProductName === capProductName

if(firstProductPrice < capProductPrice && sameQuantity && !sameName){
    console.log('prueba')
}

//////operador ternario

message = firstProductPrice < capProductPrice ? `producto ${firstProductName} tiene mejor precio` : `producto ${firstProductName} es mas caro que`
//ternario------> 1) condicion, si es True se pasa el valor primero, si no se pasa el valor despues de los dos punto :


true + true //---> 2   js lo toma como 1 

///switch ----> en redux se utiliza mucho
let day = 'monday'
switch (day){
    case 'monday':
        console.log('hay clase de JS');
        break;
    case 'tuesday':
        console.log('hay clase de JS')
        break;
    default:
        console.log('no hay clase')
}

///prompt

//si el producto que se selecciono es camiseta, si es dos o mas, pues un mensaje

//EJERCICIO
  
const selectedProduct = prompt('Ingresa el nombre del producto');
const selectedQuantity = parseInt(prompt('Ingresa la cantidad'));
messageToUser=''

if (selectedProduct === 'T-shirt' && selectedQuantity >= 2){
    messageToUser = '!Recibes un 10% de descuento en la segunda camiseta!';
}else if(selectedProduct === 'Cap' && selectedQuantity >= 3){
    messageToUser ='¡Obtén una gorra gratis por la compra de 3!'
}else{
    messageToUser = '¡Obtén una gorra gratis por la compra de 3!'
}
console.log(messageToUser)