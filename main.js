'use strict'

// console.log(document.body);

// const pippoTag = document.getElementById('pippo');

// console.log(pippoTag);


// const mainDiv = document.getElementById('main-div');

// const newP = document.createElement('p');

// const text = document.createTextNode('Attento! Non premere, è pericoloso!!!');

// newP.appendChild(text);

// mainDiv.appendChild(newP);

/////////////////////////////////////////////////
//ToDo

const toDos = ["studiare javascript", "esercitarmi su codewars", "ripetere la scacchiera", "fizzbuzz forever"];



function displayList(array){

    document.getElementById('main-list').innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
    
        const mainList = document.getElementById('main-list');

        const newLi = document.createElement('li');

        const text = document.createTextNode(element);

        const doneButton = document.createElement('button');

        const buttonText = document.createTextNode('Done');

        doneButton.appendChild(buttonText);

        doneButton.addEventListener('click', (event) => removeTodo(element));

        newLi.appendChild(text);
        newLi.appendChild(doneButton);
        mainList.appendChild(newLi);

    }
}


displayList(toDos);



function addButtonPressed() {
    const input = document.getElementById('todo-input');
    if(input.value !== ''){
        const newTodo = input.value;
        toDos.push(newTodo);
        displayList(toDos);
        input.value = '';
    }
}

function removeTodo(todo){
    const todoIndex = toDos.indexOf(todo);
    toDos.splice(todoIndex, 1);
    displayList(toDos);
}



