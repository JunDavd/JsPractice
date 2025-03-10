let selectedProduct = prompt('Ingresa el nombre del producto');
let selectedQuantity = parseInt(prompt('Ingresa la cantidad'));
selectedProduct = selectedProduct.trim().toLowerCase()
selectedQuantity = selectedQuantity ?? 0 //no hace nada porque parseint formatea si no es un numero a NaN
messageToUser=''

if (selectedProduct === 't-shirt' && selectedQuantity >= 2){
    messageToUser = '!Recibes un 10% de descuento en la segunda camiseta!';
}else if(selectedProduct === 'cap' && selectedQuantity >= 3){
    messageToUser ='¡Obtén una gorra gratis por la compra de 3!'
}else{
    messageToUser = '¡Obtén una gorra gratis por la compra de 3!'
}


console.log(messageToUser)

