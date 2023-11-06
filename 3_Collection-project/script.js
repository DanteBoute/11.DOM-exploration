const collection = [
  {
    name: "The Office (US)",
    creators: "Greg Daniels",
    firstAired: 2005,
    picture: "series/TheOffice.png",
    genre: ["Comedy"],
    cast: ["Steve Carell", " Rainn Wilson", " John Krasinski", " Jenna Fischer"]
  },

  {
    name: "Game of Thrones",
    creators: ["David Benioff", "D.B. Weiss"],
    firstAired: 2011,
    picture: "series/GameOfThrones.png",
    genre: ["Fantasy", " Drama"],
    cast: ["Emilia Clarke", " Kit Harington", " Lena Headey", " Peter Dinklage"]
  },

  {
    name: "Sherlock",
    creators: ["Steven Moffat", "Mark Gatiss"],
    firstAired: 2010,
    picture: "series/Sherlock.png",
    genre: ["Crime", "Mystery"],
    cast: ["Benedict Cumberbatch", " Martin Freeman", " Andrew Scott", " Amanda Abbington"]
  },

  {
    name: "House of the Dragon",
    creators: ["George R. R. Martin", "Ryan Condal"],
    firstAired: 2022,
    picture: "series/HouseOfTheDragon.png",
    genre: ["Fantasy ", "Drama"],
    cast: ["Paddy Considine", " Olivia Cooke", " Matt Smith", " Emma D'Arcy"]
  },

  {
    name: "The Haunting of Hill House",
    creators: "Mike Flanagan",
    firstAired: 2018,
    picture: "series/HauntingOHH.png",
    genre: ["Horror", " Drama"],
    cast: ["Victoria Pedretti", " Oliver Jackson-Cohen", " Henry Thomas", " Elizabeth Reaser "]
  },


  {
    name: "Stranger Things",
    creators: ["The Duffer Brothers"],
    firstAired: 2016,
    picture: "series/StrangerThings.png",
    genre: ["Science Fiction", " Horror"],
    cast: ["Millie Bobby Brown", " Finn Wolfhard", " Winona Ryder", " David Harbour "]
  },

  {
    name: "Breaking Bad",
    creators: "Vince Gilligan",
    firstAired: 2008,
    picture: "series/BreakingBad.png",
    genre: ["Crime", " Drama"],
    cast: ["Bryan Cranston", " Aaron Paul", " Anna Gunn", " Dean Norris"]
  },

  {
    name: "The Witcher",
    creators: "Lauren Schmidt Hissrich",
    firstAired: 2019,
    picture: "series/Witcher.png",
    genre: ["Fantasy", " Adventure"],
    cast: ["Henry Cavill", " Anya Chalotra", " Freya Allan", " Joey Batey"]
  },

{
    name: "The Walking Dead",
    creators: "Frank Darabont",
    firstAired: 2010,
    picture: "series/WalkingDead.png",
    genre: ["Horror", " Drama", " Post-Apocalyptic"],
    cast: ["Andrew Lincoln", " Norman Reedus", " Danai Gurira", " Melissa McBride"]
  },

  {
    name: "Brooklyn Nine-Nine",
    creators: ["Michael Schur", "Dan Goor"],
    firstAired: 2013,
    picture: "series/Brooklyn99.png",
    genre: ["Comedy", " Crime"],
    cast: ["Andy Samberg", " Terry Crews", " Stephanie Beatriz", " Andre Braugher "]
  }
];

// You'll have to create a card for each object with javascript and populate it with the properties from that same object.
// Make your own design, using grid and/or flex techniques, and create the corresponding HTML skeleton and css file (no frameworks).
// Once this is done, you'll have to display your collection in a nice, responsive way into your html body.

const mainSection = document.querySelector('main');

const oneCard = (listElement) => {

// Step 1: Create a div
const card = document.createElement('div');
// Step 1.1: Put div in right spot

// Step 2: Add a 'card' class to the div
card.classList.add('card');
// Step 3: Add a title (H3), img,... to the card
const cardImage = document.createElement('img');
const cardTitle = document.createElement('h3');
const cardCreator = document.createElement('h4');
const cardYear = document.createElement('h5');
const cardGenre = document.createElement('h6');
const cardCast = document.createElement('ul');
const castMember = document.createElement('li');

const castList = document.querySelector('ul');

cardImage.classList.add('image');
cardTitle.classList.add('title');
cardCreator.classList.add('creator');
cardYear.classList.add('year');
cardGenre.classList.add('genre');
cardCast.classList.add('cast');

cardImage.src = listElement.picture;
cardTitle.textContent = listElement.name;
cardCreator.textContent = listElement.creators;
cardYear.textContent = listElement.firstAired;
cardGenre.textContent = listElement.genre;
cardCast.textContent = listElement.cast;

// castList.appendChild(castMember);
card.appendChild(cardImage);
card.appendChild(cardTitle);
card.appendChild(cardCreator);
card.appendChild(cardYear);
card.appendChild(cardGenre);
card.appendChild(cardCast);



mainSection.appendChild(card);
}

collection.forEach(film => {
  oneCard(film);
});
console.log(collection[0].name);