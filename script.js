
// var myName = "Vinicius"; //atualizadas e reatribuidas dentro do escopo

// let lenguage = "javascript"; // só podem ser atualizadas

// const parant = "paramet"; // ela nao pode ser atualizada nem atribuida.

// FizzBuzz
let resultado = fizzBuzz();

//console.log(resultado)

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
        return 'Não é um número';
    if((entrada % 3===0) && (entrada % 5 === 0))  
    return 'FizzBuzz';      
    if(entrada % 3===0)  
        return 'Fizz';  
    if(entrada % 5===0)  
        return 'Buzz'; 
    if((entrada % 3!==0) && (entrada % 5 !== 0)) 

        return entrada
    
}

//Reverse String

let newStr = '';

function reverseAString(str){
    for(let i = str.length -1; i>= 0; i--){
        newStr += str[i];
        //console.log(newStr)
    }
}

let resultado2 = reverseAString('Hello Gama Academy')

//Convert Celsius to Fahrenheit

function convertToFahrenheit(value){
    return value * 1.8 + 32
}
let result = convertToFahrenheit(1)
//console.log(result)

const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = newListInput.value
    if(listName === null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})
function createList(name){
    return{id: Date.now().toString(), name: name}

}
function render(){
    clearElement(listContainer);
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
    })
}


function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild)
    }
}

render()