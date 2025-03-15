const numbers = [1,2,3,4,5]

for (const number of numbers) {
    console.log(number)
}

for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
}


numbers.forEach((value, index) => {
    console.log(value)
})
//////////// esto es como funciona un forEach
const forEach = (list,cb) => {
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        cb(element,index)
    }
}

forEach(numbers, (value, index) => {
    console.log(value, index)
})

////////////

/////map & filter, todos tienen la misma estructura
///dentro esperan una funcion 
///son metodos de arrays

numbers.map((number, index) => {
    console.log('dentro mam',number, index)
    return number * 2
})

//refactorizado

const double = numbers.map(number => (number * 2)).join('|') //como es un array, puedo utilizar metodos de un array
//map siempre devuelve una copia limpia
///es interesante, porque devuelve un nuevo array del mismo tamaño
//en map siempre debemos retornar un valor 
//en veriosn for of


const doubleForOf = []
for (const number of numbers) {
    doubleForOf.push(number * 2)
}


///filter

const lowerThan5 = numbers.filter(number => {
    return number < 5 ////no tiene sentido poner un if, retornar true y si no false //se puede haccer un ternario tambien
}).map(number => number * 2) /// es como hacer dos bucles, primero el filter y luego el map
//tiene sentido mejor hacer el filter primero 

//con for of
const doubleForOf = []
const lower
for (const number of numbers) {
    doubleForOf.push(number * 2)
}

////ejercicio

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
    { title: '', author: 'Stephenie Meyer', year: 2005 },
    { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  ];

  const titles2000 = books.filter(({ year }) => year > 2000)
  .map(({ title }) => title)
  .join(', ')

  console.log(titles2000)

  
  const twilight = books.find((book) => {
    return book.title == 'Twilight'
  })

  console.log(twilight)


  /////error grave

  twilight.stock = 0 ///esto modifica y añade el stock a todos los objetos de books

  console.log(twilight,books)

  ////forma correcta
books = books.map(book => {
    if(book.title === 'Twilight'){
        return {...book, stock: 0}
    }
    return {...book, stock: 10}
})

  //////

  const accounts = [
    {
        user: 'kevin',
        money: 1000,
    }
    {
        user: 'test',
        money: 12222,
    }
  ]

  const user1 = accounts.find(account )

  ///si se usa find, luego no modifiques un dato que encontraste y lo actualizas, es un error de mutabilidad 
// para el ejercicio de la playlist


const setStock = (title, quantity) => {
    const book = books.find(book => book.title === title)
    if(!book) {
        throw new Error('book not found')
    }
    book = book.map(book => {
        if(book.title === title){
            return {...book, stock: quantity}
        }
        return {...book}
    })
}

try{
    setStock('35',100)
}catch(error){
    alert(error)
}


//// mas metodos
//some, devuelve tru si encuentra alguno con la condicion false si no

const hasStock = books.some((book) => {
    return book === 50
})

//every

const allStock = books.every((book) => {
    return book.stock == 0
})


////REDUCE ///se pasa de un tipo a otro, a lo que sea, objetos, numeros, booleanos 

const total = numbers.reduce((acc,number) => { 
    const result = acc + number
    return result;
},0) ///se pasa de un array a un numero 
///es util, pero hay que tener muy cuidado 

//// modulos, todo el tema de rutas y modulos, como moverse por los ficheros

///ejercicio

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

const paresImpares = (numbers) => {
    const validNumbers = numbers.filter((num) => typeof num === 'number' && !isNaN(num));
    const pares = validNumbers.filter(number => number % 2 == 0)
    const impares = validNumbers.filter(number => number % 2 == 1)
    return {pares, impares}
}

const {pares, impares} = paresImpares(numbers) // no devolver result sino un destructuring con par e impar
console.log(pares, impares)