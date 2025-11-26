// const fruits = [
//     {name: "banana", origin: "ecuador", weight: 100},
//     {name: "mela", origin: "italia", weight: 200},
//     {name: "mango", origin: "venezuela", weight: 50},
//     {name: "avocado", origin: "perù", weight: 10},
//     {name: "papaya", origin: "guatemala", weight: 70},
// ]

// const container = document.getElementById('fruit-container');

// for (const fruit of fruits) {
    
//     const fruitHtml = `<div class="card">
//     <p>nome: ${fruit.name}</p>
//     <p>origin: ${fruit.origin}</p>
//     <p>peso: ${fruit.weight} kg</p>
// </div>`

// container.innerHTML += fruitHtml;

// }

// const cosmetici = [
//     {
//         id: 1,
//         nome: "Crema Idratante Viso",
//         marca: "Nivea",
//         categoria: "Skincare",
//         prezzo: 12.99,
//         ingredientiPrincipali: ["Aloe Vera", "Acido Ialuronico", "Vitamina E"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 2,
//         nome: "Mascara Volume",
//         marca: "Maybelline",
//         categoria: "Makeup",
//         prezzo: 9.99,
//         ingredientiPrincipali: ["Cera d'Api", "Pigmenti Minerali"],
//         usoConsigliato: "Ogni volta che si desidera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 3,
//         nome: "Shampoo Antiforfora",
//         marca: "Head & Shoulders",
//         categoria: "Haircare",
//         prezzo: 6.49,
//         ingredientiPrincipali: ["Piroctone Olamine", "Zinco Pyrithione"],
//         usoConsigliato: "2-3 volte a settimana",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 4,
//         nome: "Balsamo Labbra",
//         marca: "Burt's Bees",
//         categoria: "Skincare",
//         prezzo: 4.99,
//         ingredientiPrincipali: ["Cera d'Api", "Olio di Cocco"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.8,
//         inStock: true
//     },
//     {
//         id: 5,
//         nome: "Fondotinta Liquido",
//         marca: "L'Oréal Paris",
//         categoria: "Makeup",
//         prezzo: 14.99,
//         ingredientiPrincipali: ["Olio di Jojoba", "SPF 15"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 6,
//         nome: "Siero Anti-Age",
//         marca: "The Ordinary",
//         categoria: "Skincare",
//         prezzo: 19.99,
//         ingredientiPrincipali: ["Retinolo", "Vitamina C"],
//         usoConsigliato: "Sera",
//         recensioni: 4.6,
//         inStock: false
//     },
//     {
//         id: 7,
//         nome: "Ombretto Palette",
//         marca: "NYX",
//         categoria: "Makeup",
//         prezzo: 16.99,
//         ingredientiPrincipali: ["Pigmenti Minerali", "Olio di Ricino"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 8,
//         nome: "Detergente Viso",
//         marca: "La Roche-Posay",
//         categoria: "Skincare",
//         prezzo: 13.99,
//         ingredientiPrincipali: ["Acqua Termale", "Glicerina"],
//         usoConsigliato: "Mattina e sera",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 9,
//         nome: "Lacca per Capelli",
//         marca: "TRESemmé",
//         categoria: "Haircare",
//         prezzo: 7.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Pantenolo"],
//         usoConsigliato: "Dopo lo styling",
//         recensioni: 4.0,
//         inStock: true
//     },
//     {
//         id: 10,
//         nome: "Correttore Occhiaie",
//         marca: "MAC",
//         categoria: "Makeup",
//         prezzo: 22.99,
//         ingredientiPrincipali: ["Olio di Argan", "Caffeina"],
//         usoConsigliato: "Mattina",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 11,
//         nome: "Maschera Capelli",
//         marca: "Garnier",
//         categoria: "Haircare",
//         prezzo: 5.99,
//         ingredientiPrincipali: ["Olio di Avocado", "Cheratina"],
//         usoConsigliato: "1 volta a settimana",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 12,
//         nome: "Blush in Polvere",
//         marca: "Milani",
//         categoria: "Makeup",
//         prezzo: 10.99,
//         ingredientiPrincipali: ["Mica", "Olio di Jojoba"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.3,
//         inStock: true
//     },
//     {
//         id: 13,
//         nome: "Tonico Viso",
//         marca: "Clinique",
//         categoria: "Skincare",
//         prezzo: 18.99,
//         ingredientiPrincipali: ["Acido Salicilico", "Camomilla"],
//         usoConsigliato: "Dopo la detersione",
//         recensioni: 4.6,
//         inStock: true
//     },
//     {
//         id: 14,
//         nome: "Smalto Semipermanente",
//         marca: "OPI",
//         categoria: "Nailcare",
//         prezzo: 11.99,
//         ingredientiPrincipali: ["Resine Acriliche", "Pigmenti"],
//         usoConsigliato: "Ogni 2 settimane",
//         recensioni: 4.8,
//         inStock: false
//     },
//     {
//         id: 15,
//         nome: "Profumo Donna",
//         marca: "Chanel",
//         categoria: "Fragrance",
//         prezzo: 99.99,
//         ingredientiPrincipali: ["Note di Vaniglia", "Fiori Bianchi"],
//         usoConsigliato: "Occasioni speciali",
//         recensioni: 4.9,
//         inStock: true
//     },
//     {
//         id: 16,
//         nome: "Scrub Corpo",
//         marca: "The Body Shop",
//         categoria: "Bodycare",
//         prezzo: 15.99,
//         ingredientiPrincipali: ["Zucchero di Canna", "Olio di Mandorle"],
//         usoConsigliato: "2 volte a settimana",
//         recensioni: 4.4,
//         inStock: true
//     },
//     {
//         id: 17,
//         nome: "Eyeliner Liquido",
//         marca: "Kiko Milano",
//         categoria: "Makeup",
//         prezzo: 8.99,
//         ingredientiPrincipali: ["Pigmenti Neri", "Glicerina"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.2,
//         inStock: true
//     },
//     {
//         id: 18,
//         nome: "Crema Mani",
//         marca: "Neutrogena",
//         categoria: "Skincare",
//         prezzo: 6.99,
//         ingredientiPrincipali: ["Glicerina", "Olio di Karité"],
//         usoConsigliato: "Quotidianamente",
//         recensioni: 4.5,
//         inStock: true
//     },
//     {
//         id: 19,
//         nome: "Spray Fissante Makeup",
//         marca: "Urban Decay",
//         categoria: "Makeup",
//         prezzo: 24.99,
//         ingredientiPrincipali: ["Alcool Denat.", "Glicerina"],
//         usoConsigliato: "Dopo il trucco",
//         recensioni: 4.7,
//         inStock: true
//     },
//     {
//         id: 20,
//         nome: "Olio per Capelli",
//         marca: "Moroccanoil",
//         categoria: "Haircare",
//         prezzo: 39.99,
//         ingredientiPrincipali: ["Olio di Argan", "Vitamina E"],
//         usoConsigliato: "1-2 volte a settimana",
//         recensioni: 4.8,
//         inStock: true
//     }
// ];

// const makeupContainer = document.getElementById('makeup-container');

// for (const makeup of cosmetici) {

//     // const newCard = document.createElement('div');
//     // newCard.classList.add('makeup-card')

//     // const nameSpan = document.createElement('span');
//     // const nameNode = document.createTextNode('nome: ' + makeup.nome);
//     // nameSpan.appendChild(nameNode);
//     // newCard.appendChild(nameSpan);

//     // const brandSpan = document.createElement('span');
//     // brandSpan.appendChild(document.createTextNode('marca: ' + makeup.marca));
//     // newCard.appendChild(brandSpan);

//     // const priceSpan = document.createElement('span');
//     // priceSpan.appendChild(document.createTextNode('prezzo: ' + makeup.prezzo + ' €'));
//     // newCard.appendChild(priceSpan);

//     // const compositionSpan = document.createElement('span');
//     // compositionSpan.appendChild(document.createTextNode('composizione: ' + makeup.ingredientiPrincipali.join(', ')));
//     // newCard.appendChild(compositionSpan);

//     // makeupContainer.appendChild(newCard);

//     const makeupString = `
//     <div class="makeup-card">
//         <span>nome: ${makeup.nome}</span>
//         <span>marca: ${makeup.marca}</span>
//         <span>prezzo: ${makeup.prezzo}</span>
//         <span>composizione: ${makeup.ingredientiPrincipali.join(', ')}</span>
//     </div>`

//     makeupContainer.innerHTML += makeupString;

// }