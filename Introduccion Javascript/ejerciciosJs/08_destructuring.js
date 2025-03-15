
const user = {
    test: '123'
}

console.log(user.test)

////forma diferente de acceder 

const { year, author} = { 
    title: 'Twilight', 
    author: 'Stephenie Meyer',
    year: 2005,
    rating: {
        rottenTomatoes: 6,
    }
 }

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
///////////destructuring explicación

const books2000 = (books) => {
    let titles = [];
    for (const book of books) {
        if (book.year > 2000) titles = [...titles, book.title];
    }
    return titles.join(', ')
}
////refactorizada mostrando la desestructuracion
const books2001 = (books) => {
    let titles = [];
    for (const {year, title} of books) {
        if (year > 2000) titles = [...titles, title];
    }
    return titles.join(', ')
}

///otro ejemplo

const bookList2 = [...books]
.filter(({year}) => year > 2000)
.map(({title}) => title).join(', ')
console.log(bookList2)


/////otro ejemplo de destructuring

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

const renderShow = ({name, genres}) => { //en donde sea que llegue un objeto, lo podemos destructurar, igualmente un array
    return `
    <h2>${name}<h2>
    <p>${genres.join(', ')}</p>
    `;
};

///ejemplo con useState
const useState = () => {
    return['example', 12];
}

///ejemplo en REACT

function myButton() {
    const [count, setCount] = useState(0) /// useState devuelve un array de dos posiciones y nosostros no quedamos con las dos primeras para luego utilizarlas 
}

const getAdminUser = () => {
    return {name: 'admin', role: 'ADMIN', email:'test@admin'}
}

const [key, value] = useState() ///retorna un array que tiene ['example, 12]
const {role} = getAdminUser() //{name: 'admin', role: 'ADMIN', email:'test@admin'}, se guarda el valor de role

  //////////////////
const csvProducts = 'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';

///quiero pasarlo a un formato similar a JSON

const processCSV = (csv) => { //'T-shirt,10,Amazon\nCap,5,Google\nPants,15,Amazon\nShoes,20,Google';
    let products = []
    const lines = csv.split('\n') //devuelve el listado partido por los saltos
    for (const line of lines) { //T-shirt,10,Amazon
        const [name,price,store] = line.split(',') //divide 
        products = [...products, {
            name: name, //se puede reducir a name,
            price: parseInt(price), ///price esta entrando como string, debe ser numero
            store: store // se puede reducir a solo store,
        }]
    }
    return products
}

const productos = processCSV(csvProducts)
console.log(productos)


////arrays

const arr1 = [1,2,3,4,5]
const arr2 = ['as','test']
const total = [...arr1,arr2] //concatena

//obejtos

const infoGeneral = {
    bootcamp: 'keepcoding',
    edicion: 'web18',
    name:'general',
}

const module1 = {
    ...infoGeneral, ///se añade la info general, pero quedan dos names, el name que prevalece es el ultimo, asi que importa el orden 
    name: 'js'
}
const module2 = {
    ...infoGeneral,
    name: 'HTML'
}

///queremos hacer un nuevo objeto pero sin la propiedad edicion

//const module3 = {...infoGeneral}
//delete module3.edicion

const {edicion, ...module3} = {...infoGeneral, name: 'modelo de datos'}