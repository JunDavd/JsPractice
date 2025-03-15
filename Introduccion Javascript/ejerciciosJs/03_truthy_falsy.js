////condiciones de los nulos que hacen que se consideren como verdaderos o falsos

//valores truthy

const value1 = ''; ///esto es falso si es cadena ' ' con espacio, se considera como verdadero
const value2 = NaN || null || undefined /// cualquiera de estos es false si esta en el valor

if (value1){
    console.log('condicion true')
}else{
    console.log('condicion false')
    
}



const firstProduct = 'tshirt'
const firstProductQuantity = 0;

if (firstProduct && firstProductQuantity){
    console.log('tenemos camisetas disponibles')
} else {
    console.log('no tenemos camisetas')
}

let message = value0 ? 'existe el value0':'no existe'


////operador con un funcionamiento particular 

const street = ''; ///campo dinamico que tal vez lo puede rellenar el ususario

const shopNumber = street || 'no incluido' //ese valor lo añadimos a una varianle

/// con || separa de si es el valor falso dese la evaluacion del valor en la variable, si stree es falso, se da el valor despiues de ||

console.log(shopNumber)

// con ?? directamente te separa solo los NaN null Undefined
 const shopNumber2 = street ?? 'no incluido'


 ///metodos de cadenas:con los metodos de las cadenas

 const str = 'hola mundo'
 console.log(str.length)

 console.log(str.includes('hola')) ///determina si en una cadena esta incuido alguno otro string

 str.endsWith //parandonos encima podemos saber que hace el metodo. este determina si una cadena termina con el needle que se le da al metodo


 //////////////////////////////////////

 let userName = '  kevin'
 let passWord = ' keepCoding  '

 if (userName === 'kevin' && passWord === 'keepcoding'){
    console.log('tienes acceso')
 } else{
    console.log('no tienes acceso')
 }

 //en la parte de arriba no va a tener acceso por que hay espacios
 // se debe unificar los parametros o sanitizar los datos de las variables, por ejemplos espacios, mayusculas, simbolos,etc

 userName = userName.trim()
 userName = userName.toLocaleLowerCase
  ///quitas los espacios de adelante o atras
 passWord = passWord.trim()
 passWord = passWord.toLocaleLowerCase()

 ///otra opcion 
 userName = userName.trim().toLocaleLowerCase().replaceAll()


 ///REPLACE ----> solo cambia lo que encuentra en la primea
 //la otra opcion es replaceall

 let username = '  kevin'
 let email = '  keepconfing@gmail.com'

 email = email.replace('@test.com', '*****')
 console.log(email)

 ////PARSEO ------> cambiar de un string a un numero o viseversa 
//// prompt funcion que muestra popup y pide informacion
 const promptPrice = prompt('dame un precio del producto')
 //la informacion que se recibe es una cadena, necesito entonces normalizar

 const price = parseInt(promptPrice ?? 0) ///me aseguro de que cuando llega un nulo, se regrese un cero 
 console.log(price)
 ////esto es importante porque debe estar noramlizado, puede dar '12' + 12 = 1212
 const price2 = +promptPrice ?? 0


 