
const firstProductName = 'T-shirt'
const firstProductQuantity = 12
const firstProductPrice = 15

const secondProductName = 'Cap'
const secondProductQuantity = 12
const secondProductPrice = 12

const firstProduct = {} // debe estar inicializado con corchetes o de otra forma da un error 
console.log(firstProduct, typeof firstProduct)

firstProduct.name = 'T-shirt'
firstProduct.quantity = 12
firstProduct.price = 15
console.log(firstProduct)

///objetos----tienen propiedades y volres con sus tipos

const secondProduct = {
    name: secondProductName,
    quantity: secondProductQuantity,
    price: secondProductPrice,
    'country-city': 'ES/madrid' //para evitar error por un nombre de propiedad raro, por ejemplo con el -
};

console.log(secondProduct)

///los valores pueden ser NaN, undefined, listas e incluso objetos

console.log(secondProduct.name, secondProduct['price']) // formas de acceder a propiedades // 

//ejemplo de notacion de corchetes

const getProductInfor = (product, n) => {
    return product[n];
}

getProductInfor(secondProduct, 'name')
getProductInfor(secondProduct, 'price')


const thirdProduct = {
    name: 'shoes',
    quantity: 12,
    price: 60,
    sizes: ['S','M','L'],// aqui lo idel seria que los otros porductos mantuvieran esta propieda, asi sea null o undefined
    attributes: {
        color: 'red',
        brand: 'nike',
    },
};

console.log(thirdProduct.sizes.join(','))
console.log(thirdProduct.attributes.brand)

////listados, pueden ser listados de todo tipo, arrays que tienen objetos

const shows = [
    {
        id: 1,
        name: 'under the dome',
        genres: ['drama','science-fiction'],
        rating: 2
    },
    {
        id: 2,
        name: 'game of thrones',
        genres: ['drama'],
        rating: 8
    },
    {
        id: 3,
        name: 'friends',
        genres: ['comedia'],
        rating: 6
    }
]

console.log(shows[0].genres[0])

console.log(shows[0].rating + shows[1].rating)//solo teniendo dos esta bien hacerlo, mas de dos es una jartera

let ratingTotal = 0
for (const show of shows) {
    console.log(show.rating)
    ratingTotal = ratingTotal + show.rating
}

console.log(ratingTotal)


const renderShow = (show) => {
    return `
    <h2>${show.name}<h2>
    <p>${show.genres.join(', ')}</p>
    `;
};

let template = ''
for (const show of shows) {
    template = template + renderShow(show)
}
document.write(template)



/**
 * Ejercicio
Recorrer el array de libros y mostrar en consola los títulos de los libros que fueron publicados después del año 2000. Mostrar en un único console.log al final del script
 */

const books = [
    { title: '1984', author: 'George Orwell', year: 1949 },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      year: 1967,
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: 'J.K. Rowling',
      year: 1997,
    },
    { title: 'The Da Vinci Code', author: 'Dan Brown', year: 2003 },
    { title: 'Twilight', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  ];

////////////problemas con objetos

const user = {
    email: 'test@test.com',
    role: 'USER',
    app: 'keepcoding',
    modules: ['js','html','react']
}

const admin = user 

admin.email = 'admin@test.com'
admin.role = 'ADMIN'

console.log(admin, user) //// ----> estamos sobresecribiendo los dos objetos



//formas de resolvar el problema
// 1. JSON.stringify/parse  ---> soluccion intermedia
//join pasa array a estring
//objeto a string JSON.strinify(user)
//borra funciones, valores nulos o indefinidos
const admin = JSON.stringify(user)

//parse de un string-----> pasar de estring a objeto

const admin = JSON.parse(JSON.stringify(user)) ///se crea una copia limpia

///froma 2, spread operator

const admin = {...user}// object.assign({}, user) /// esto tiene un problema, ABAJO DESRITO

const user1 = {
    email: 'test@test.com',
    role: 'USER',
    app: 'keepcoding',
    modules: ['js','html','react'],
    info: {
        name: 'test',
        surname: 'surname'
    }
}

///no se hace copia de info, se alteran los datos del original

const admin = {
    ...user,
    info: {
        ...user.info
    }
}
////este es ideal para cuando quieres copiar objetos con funciones

/// 3 structuredClone

const admin1 = structuredClone(user) ///con esto obtenemos lo mismo que el primer metodo 


////como borrar proiedades
//delete

delete admin.modules /////Hay que tener cuidado de no borrar las propiedades de un objeto sin antes copiarlo

console.log(JSON.stringify(user, null, 2)) ////////BASTANTE UTIL PARA VISUALIZAR LOS DATOS EN FORMATO JSON
