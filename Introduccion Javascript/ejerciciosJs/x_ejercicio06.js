/**
 * Dado este listado de valores, crea un programa que separe los números pares de los impares en dos arrays diferentes.
const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN];

let evenNumbers = []; // Array para almacenar números pares
let oddNumbers = [];  // Array para almacenar números impares
 */

const numbers = [1, 2, 33, 41, 5, 60, 74, 87, 90, 101, null, '', false, NaN]
let evenNumbers = []; 
let oddNumbers = [];


const selectNumbers = (listOfElements) =>{
    for (const listItem of listOfElements) {
        if(typeof(number) === 'number'){
            if(listItem % 2 === 0){
                evenNumbers = [...evenNumbers,number]
            } 
            else if(listItem % 2 !== 0){
                oddNumbers = [...oddNumbers,number]
            }
        }
    }
}



