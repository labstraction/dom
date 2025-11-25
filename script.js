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

//append
const emptyDiv = document.getElementById('empty-div');

const cardDiv = document.createElement('div');
cardDiv.id = 'first-card';
emptyDiv.appendChild(cardDiv);

const nameP = document.createElement('p');
const nameNode = document.createTextNode('nome: ' + student1.name);
nameP.appendChild(nameNode);
cardDiv.appendChild(nameP);

const surnameP = document.createElement('p');
const surnameNode = document.createTextNode('cognome: ' + student1.surname);
surnameP.appendChild(surnameNode);
cardDiv.appendChild(surnameP);

const ageP = document.createElement('p');
ageP.appendChild(document.createTextNode('età: ' + student1.age));
cardDiv.appendChild(ageP);

const genderP = document.createElement('p');
genderP.appendChild(document.createTextNode('gender: ' + student1.gender));
cardDiv.appendChild(genderP);


//innerHTML

const htmlString = `<div class="card">
    <p>nome: ${student2.name}</p>
    <p>cognome: ${student2.surname}</p>
    <p>età: ${student2.age}</p>
    <p>genere: ${student2.gender}</p>
</div>`

console.log(htmlString);
console.log(emptyDiv.innerHTML);

// emptyDiv.innerHTML = emptyDiv.innerHTML + htmlString;
emptyDiv.innerHTML += htmlString;


/// AGGIUNGERE CLASSI

const card = document.getElementById('first-card');
// card.className = 'card';
// card.className = 'card green-background'

card.classList.add('card');
card.classList.add('green-background');
card.classList.toggle('card');


const fruits = [
    {name: "banana", origin: "ecuador", weight: 100},
    {name: "mela", origin: "italia", weight: 200},
    {name: "mango", origin: "venezuela", weight: 50},
    {name: "avocado", origin: "perù", weight: 10},
    {name: "papaya", origin: "guatemala", weight: 70},
]

const container = document.getElementById('fruit-container');

for (const fruit of fruits) {
    
    const fruitHtml = `<div class="card">
    <p>nome: ${fruit.name}</p>
    <p>origin: ${fruit.origin}</p>
    <p>peso: ${fruit.weight} kg</p>
</div>`

container.innerHTML += fruitHtml;

}