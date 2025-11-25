// trovare un elemento nel dom

// getElementById
const divOne = document.getElementById('div1');
console.log(divOne);

//getElementsByClassName
const pCollection = document.getElementsByClassName('pippo');
console.log(pCollection);

const divCollection = document.getElementsByClassName('pluto');
console.log(divCollection);

//getElementsByTagName
const tagCollection = document.getElementsByTagName('p');
console.log(tagCollection);

//querySelector
const firstP = document.querySelector('p');
console.log(firstP);

//querySelectorAll
const allPs = document.querySelectorAll('p');
console.log(allPs);

const allPippo = document.querySelectorAll('.pippo');
console.log(allPippo);

const divOneA = document.querySelector('#div1');
console.log(divOneA);


///// LEGGERE IL CONTENUTO

console.log(divOne.innerText);
console.log(divOne.textContent);
console.log(divOne.innerHTML);
console.log(divOne.outerHTML);
console.log(divOne.children);

///// SCRIVERE IL CONTENUTO

//appendChild
const newP = document.createElement('p');
divOne.appendChild(newP);

////createTextNode
const node = document.createTextNode('quarto');
newP.appendChild(node);


//innerHTML
newP.innerHTML = 'quarto paragrafo'
newP.innerHTML = '<strong>quarto paragrafo</strong>'


//esempio

const student1 = {name: 'alexander', surname:'macias', age: 26, gender:'male'};
const student2 = {name: 'evelyn', surname:'medina', age: undefined, gender:'female'};