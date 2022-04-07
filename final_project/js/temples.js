const resquestURL = 'data/data.json';
const cards = document.querySelector('.cardTemple');


fetch(resquestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jasonObject) {
    const temples = jasonObject['temples'];
    temples.forEach(displayTemples);
  });

  function displayTemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add('directoryHolder', 'dcard');
    let templeName = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');

    // Add the textContent property to fill the directory
    templeName.textContent = `${temple.name}`;
    address.textContent = `${temple.address}`;
    phone.textContent = `${temple.phone}`;
    url.innerHTML = `${temple.url}`;

    url.setAttribute('href', '#')

    // Set the img attributes for the logos
    logo.setAttribute('src', temple.imgfile);
    logo.setAttribute('alt', `Logo of ${temple.templeName}`);
    logo.setAttribute('loading', 'lazy');

    // Add the business information to the section(card)
    card.appendChild(logo);
    card.appendChild(templeName);
    card.appendChild(address);
    card.appendChild(phone)
    card.appendChild(url);

    // Add/append the exsiting HTML div with the dir-cards with the section(card)
    cards.appendChild(card);
  }

  const listView = document.querySelector('#listView');
  const cardView = document.querySelector('#gridView');

  listView.addEventListener('click', () => {cards.classList.add('dirList')}, true);
  listView.addEventListener('click', () => {cards.classList.remove('directoryCards')}, true);

  cardView.addEventListener('click', () => {cards.classList.add('directoryCards')}, true)
  cardView.addEventListener('click', () => {cards.classList.remove('dirList')}, true)