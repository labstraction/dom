console.log('pagina due funziona')

const nintendoGames = [
    {
        title: "The Legend of Zelda: Breath of the Wild",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Action-Adventure", "Open World"],
        releaseYear: 2017,
        developer: "Monolith Soft, Nintendo EPD",
        isMultiplayer: false,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Super Mario Odyssey",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2017,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 97,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Animal Crossing: New Horizons",
        platform: ["Nintendo Switch"],
        genre: ["Life Simulation", "Social Simulation"],
        releaseYear: 2020,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 90,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Metroid Dread",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Platform"],
        releaseYear: 2021,
        developer: "MercurySteam, Nintendo EPD",
        isMultiplayer: false,
        rating: 88,
        priceUSD: 9.99,
        isExclusive: true
    },
    {
        title: "Splatoon 3",
        platform: ["Nintendo Switch"],
        genre: ["Shooter", "Action"],
        releaseYear: 2022,
        developer: "Nintendo EPD",
        isMultiplayer: true,
        rating: 83,
        priceUSD: 29.99,
        isExclusive: true
    },
    {
        title: "Pokémon Scarlet and Violet",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Adventure"],
        releaseYear: 2022,
        developer: "Game Freak",
        isMultiplayer: true,
        rating: 72,
        priceUSD: 59.99,
        isExclusive: true
    },
    {
        title: "Super Smash Bros. Ultimate",
        platform: ["Nintendo Switch"],
        genre: ["Fighting", "Action"],
        releaseYear: 2018,
        developer: "Bandai Namco Studios, Sora Ltd.",
        isMultiplayer: true,
        rating: 93,
        priceUSD: 19.99,
        isExclusive: true
    },
    {
        title: "Mario Kart 8 Deluxe",
        platform: ["Nintendo Switch"],
        genre: ["Racing", "Party"],
        releaseYear: 2017,
        developer: "Nintendo EAD",
        isMultiplayer: true,
        rating: 92,
        priceUSD: 61.99,
        isExclusive: true
    },
    {
        title: "Fire Emblem: Three Houses",
        platform: ["Nintendo Switch"],
        genre: ["Tactical RPG", "Strategy"],
        releaseYear: 2019,
        developer: "Intelligent Systems, Koei Tecmo",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 99.99,
        isExclusive: true
    },
    {
        title: "Luigi’s Mansion 3",
        platform: ["Nintendo Switch"],
        genre: ["Action-Adventure", "Puzzle"],
        releaseYear: 2019,
        developer: "Next Level Games",
        isMultiplayer: true,
        rating: 86,
        priceUSD: 58.99,
        isExclusive: true
    },
    {
        title: "Donkey Kong Country: Tropical Freeze",
        platform: ["Nintendo Switch", "Wii U"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2018,
        developer: "Retro Studios",
        isMultiplayer: true,
        rating: 87,
        priceUSD: 35.99,
        isExclusive: true
    },
    {
        title: "Xenoblade Chronicles 3",
        platform: ["Nintendo Switch"],
        genre: ["RPG", "Action"],
        releaseYear: 2022,
        developer: "Monolith Soft",
        isMultiplayer: false,
        rating: 89,
        priceUSD: 39.99,
        isExclusive: true
    },
    {
        title: "Kirby and the Forgotten Land",
        platform: ["Nintendo Switch"],
        genre: ["Platform", "Adventure"],
        releaseYear: 2022,
        developer: "HAL Laboratory",
        isMultiplayer: true,
        rating: 85,
        priceUSD: 55.99,
        isExclusive: true
    },
    {
        title: "Bayonetta 3",
        platform: ["Nintendo Switch"],
        genre: ["Action", "Hack and Slash"],
        releaseYear: 2022,
        developer: "PlatinumGames",
        isMultiplayer: false,
        rating: 87,
        priceUSD: 49.99,
        isExclusive: true
    }
]


function renderGameList(games) {

    const gameCont = document.getElementById('game-container');
    gameCont.innerHTML = '';

    for (const game of games) {

        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card')

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('card-title');
        titleSpan.appendChild(document.createTextNode(game.title));
        gameCard.appendChild(titleSpan);

        const platformSpan = document.createElement('span');
        platformSpan.appendChild(document.createTextNode('piattaforma: ' + game.platform.join(', ')));
        gameCard.appendChild(platformSpan);

        const genreSpan = document.createElement('span');
        genreSpan.appendChild(document.createTextNode('genere: ' + game.genre.join(', ')));
        gameCard.appendChild(genreSpan);

        const yearSpan = document.createElement('span');
        yearSpan.appendChild(document.createTextNode('anno: ' + game.releaseYear));
        gameCard.appendChild(yearSpan);

        const developerSpan = document.createElement('span');
        developerSpan.appendChild(document.createTextNode('sviluppatore: ' + game.developer));
        gameCard.appendChild(developerSpan);

        if (game.isMultiplayer) {
            const multiSpan = document.createElement('span');
            multiSpan.appendChild(document.createTextNode('multiplayer'));
            gameCard.appendChild(multiSpan);
        }

        const ratingSpan = document.createElement('span');
        ratingSpan.appendChild(document.createTextNode('votazione: ' + game.rating));
        gameCard.appendChild(ratingSpan);

        if (game.isExclusive) {
            const exclusiveSpan = document.createElement('span');
            exclusiveSpan.appendChild(document.createTextNode('esclusivo'));
            gameCard.appendChild(exclusiveSpan);
        }


        const priceSpan = document.createElement('span');
        priceSpan.appendChild(document.createTextNode('price: $' + game.priceUSD));
        gameCard.appendChild(priceSpan);

        gameCont.appendChild(gameCard);

    }
}


renderGameList(nintendoGames);


const orderTitleBtn = document.getElementById('title-order');

function compareTitles(g1, g2){
    return g1.title.localeCompare(g2.title);
}

function orderGamesByTitle(){

    nintendoGames.sort(compareTitles);

    renderGameList(nintendoGames);

}

orderTitleBtn.addEventListener('click', orderGamesByTitle);

const orderPriceBtn = document.getElementById('price-order');

function comparePrices(g1, g2){
    return g1.priceUSD - g2.priceUSD;
}

function orderGamesByPrice(){

    nintendoGames.sort(comparePrices);

    renderGameList(nintendoGames);

}

orderPriceBtn.addEventListener('click', orderGamesByPrice);

const orderRatingBtn = document.getElementById('rating-order');

function compareRatings(g1, g2){
    return g2.rating - g1.rating;
}

function orderGamesByRating(){

    nintendoGames.sort(compareRatings);

    renderGameList(nintendoGames);

}

orderRatingBtn.addEventListener('click', orderGamesByRating);




/// completare le schede dei giochi rendendole molto belle! (con tutte le proprietà)
/// aggiungere l'ordinamento per prezzo (dal più economico al più caro)
/// aggiungere l'ordinamento per rating (dal rating migliore al peggiore)
