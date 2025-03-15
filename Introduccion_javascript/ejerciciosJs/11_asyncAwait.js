////IMPORTANTE -----> TRES FORMAS, PROMESAS, CALLBACKS Y ASYNCAWAIT
//hasta ahora solo hemos visto codigo sincrono

let data = [1,2,3,4]

if(data.length > 1){
    for(const element of data){ ///sigue un orden, si el bucle es infinito, lo de abajo no se ejecuta, bloque el codigo
        console.log(element)
    }
}

//codigo asincrono
//estas cargando una web, entras a netflix, vas a reproducir una pelicula
//la pelicual entra depemdiendo de otras condiciones, de que cargue, etc
//pero mientras la pelicula carga, puedes acceder a otra parte de la we
//tambien puedes detectar cuando escribe el ussuario, pero no sabes cuando vaya a enviar el mensaje
//esto requiere de una programacion especial, porque no sabemos cuando van a ocurrir

///metodo del navegaodr 

console.log('11')
setTimeout(() => {
    console.log('dentro set timeout')
}, 1000) //milisegundos, representa que no se va a ejecutar hasta que pase 1 segundo

/// si le pones 0, en javascript cada vez que escribes una lindea de codigo asincronico se añade a una cola
// el interprete del codigo la selecciona y la ejecuta
///cuando ponemos set time out, se sale y ejecuta el set timeout en otro lado .
///como el settimeout salio, espera hasta que haya espacio

///pero si hay un bucle infinito, nunca hay espacio para que el settimeout entre de nuevo
//es un error que puede pasar.
//imaginar que tienes una lista muy grande, que bloquean las otras ejecuciones
//cuando una web se queda colgada puede ser por eso, hay un calculo que esta costando de mas y hace que la web vaya más despacio

console.log('final script')

///cuando cargas en linkedin, aparece un pantalla de carga de los posts, es el timeout.

///ahora si....
console.log('11')
console.log('hola')
setTimeout(() => {
    console.log('keepcoding')
    console.log('finalscript') ///si quiero que esto este debado de keepcoding, pues le meto dentro, pero entonces voy a tener que escribir todo adentro ahora
}, 1000)

//entonces crearon los callback

setTimeout(() => {
    const products = [{name: 'T-shirt', price:12}]
}, 2000)

//quiero controlar como llegan los productos

const getProducts = (name, cb) => {
    setTimeout(() => {
        const products = [{name: 'T-shirt', price:12}]
        cb(products)
    }, 2000)
}
////el problema era cuandi habia errores 
getProducts((error, products) => {
    if(error){
        return console.log('hay un error')
    }
    console.log(products)
    //si quisiera volver a llamar los producitso, tocaria hacer u callback dentro
})
////LO DE ARRIBA ES EL CALLBACK HELL

////LO SIGUIENTE ES PROMISES----->> HAY QUE ENTEDERLO SI O SI
///para que funcione una funcion asincrona debe estar en formato de promesa

const getProductP


//una promuesta se puede resolver o rechazar 

///async / await

///el problema es que tenemos un codigo que no sabemos cuando va a terminar y lo enlazamos con otro que no sabemos cuando va a terminar

const main = async () => {
    try {
        const products = await getProductP()
   const detail = await getProductP(products[0].name)
   console.log(detail)
    } catch(error){
        console.log(error)
    }
}


////EL ERROR, como gestionarlo

const main = async () => {
    try {
        const products = await getProductP()
   const detail = await getProductP(products[0].name)
   console.log(detail)
    } catch(error){
        console.log(error)
    }
}


//////notas del profesor 

console.log('11');

console.log('Hola');
/*
setTimeout(() => {
  console.log('keepcoding!');
}, 1000);
*/
/// callback

const getProducts = (cb) => {
  setTimeout(() => {
    const products = [{ name: 'T-shirt', price: 12 }];
    cb(null, products);
  }, 2000);
};

const getProduct = (name, cb) => {
  setTimeout(() => {
    const product = { name: 'T-shirt', price: 12, stock: null };
    cb(null, product);
  }, 5000);
};



const getProductsP = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = [{ name: 'T-shirt', price: 12 }];
      resolve(products);
    }, 2000);
  });
};
const getProductP = (name) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = { name: 'T-shirt', price: 12, stock: null };
      resolve(product);
    }, 5000);
  });
};

getProducts((error, products) => {
  if (error) {
    console.log('Hay error con los productos');
  } else {
    getProduct(products[0].name, (error, product) => {
      if (error) {
        console.log('Error detalle producto');
      } else {
        console.log(product);
      }
    })
  }
});

// promesas
getProducstP()
  .then(products => getProductP(products[0].name))
  .then(detail => {
    console.log(detail);
  }).catch(error => {
    console.log(error);
  });

// async/await
const main = async () => {
  try {
    const produtcs = await getProducstP();
    const detail = await getProductP(produtcs[0].name);
    console.log(detail);
  } catch (error) {
    console.log(error);
  }
};

main();