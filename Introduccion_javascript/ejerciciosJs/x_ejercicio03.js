/**
 Crea una función para poder usar el código de la promoción de productos en el carrito de compras. Esta función debe recibir el nombre del producto y la cantidad, y devolver un mensaje con la promoción aplicada.
Usa tu código o este (puedes modificarlo):
 */
let selectedProduct = prompt('Ingresa el nombre del producto');
let selectedQuantity = parseInt(prompt('Ingresa la cantidad'));
selectedProduct = selectedProduct.trim().toLowerCase()

const verifiyDiscount = (productname, Quantity) =>{
    let messageToUser = ''
    if (productname === 't-shirt' && Quantity >= 2){
        messageToUser = '!Recibes un 10% de descuento en la segunda camiseta!';
    }else if(productname === 'cap' && Quantity >= 3){
        messageToUser ='¡Obtén una gorra gratis por la compra de 3!'
    }else{
        messageToUser = '¡Obtén una gorra gratis por la compra de 3!'
    }
    return messageToUser
}