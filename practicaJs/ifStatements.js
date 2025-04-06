
let age
const myText = document.getElementById('myText')
const mySubmit = document.getElementById('mySubmit')
const resultElement = document.getElementById('resultElement')


mySubmit.onclick = function(){
    age = myText.value  
    age = Number(age)  
    console.log(age)
    if(age >= 100){
        resultElement.textContent = 'you are too old'
    }
    else if(age == 0){
        resultElement.textContent = 'you were just born'
    }
    else if(age >= 18){
        resultElement.textContent = 'you are old enough'
    }
    else if(age < 0){
        resultElement.textContent = 'your age cant be below 0'
    }
    else{
        resultElement.textContent = 'you must be 18+ to enter'
    }
}
    