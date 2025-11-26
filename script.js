// trovare un elemento nel dom (document object model)

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

////EVENTI

//funzioni di callback
function pressedButton(){
    alert("non esagerare!!!")
}


//addEventListener
const myButton = document.getElementById('press-counter')

let totalPress = 0;

function addPress() {
    
    totalPress += 1;

    console.log(totalPress);

    const displayer = document.getElementById('press-displayer');

    displayer.innerHTML += "hai schiacciato " + totalPress + " volte<br>"
}

myButton.addEventListener('click', addPress);


//classlist toggle

const switchButton = document.getElementById('switch-btn');

function switchON() {
    switchButton.classList.toggle('on');

    const span = document.querySelector('#switch-btn span')

    if (span.innerText === 'OFF') {
        span.innerText = 'ON'
    } else {
        span.innerText = 'OFF'
    }
}

switchButton.addEventListener('click', switchON);


//mouse enter/leave

const badDiv = document.getElementById('bad-div');

badDiv.addEventListener('mouseenter', () => badDiv.innerHTML = 'che fai??? mi tocchi???');
badDiv.addEventListener('mouseleave', () => badDiv.innerHTML = 'fai attenzione!!!')