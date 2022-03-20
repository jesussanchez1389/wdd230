const resquestURL = 'data/data.json';
const cards = document.querySelector('.dirCards');


fetch(resquestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jasonObject) {
    const businesses = jasonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });

  function displayBusinesses(business) {
    // Create elements to add to the document
    let card = document.createElement('section');
    card.classList.add('directoryHolder', 'dcard');
    let businessName = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('a');

    // Add the textContent property to fill the directory
    businessName.textContent = `${business.name}`;
    address.textContent = `${business.address}`;
    phone.textContent = `${business.phone}`;
    email.innerHTML = `${business.email}`;

    email.setAttribute('href', '#')

    // Set the img attributes for the logos
    logo.setAttribute('src', business.imgfile);
    logo.setAttribute('alt', `Logo of ${business.businessName}`);
    logo.setAttribute('loading', 'lazy');

    // Add the business information to the section(card)
    card.appendChild(logo);
    card.appendChild(businessName);
    card.appendChild(address);
    card.appendChild(phone)
    card.appendChild(email);

    // Add/append the exsiting HTML div with the dir-cards with the section(card)
    cards.appendChild(card);
  }

  const listView = document.querySelector('#listView');
  const cardView = document.querySelector('#gridView');

  listView.addEventListener('click', () => {cards.classList.add('dirList')}, true);
  listView.addEventListener('click', () => {cards.classList.remove('directoryCards')}, true);

  cardView.addEventListener('click', () => {cards.classList.add('directoryCards')}, true)
  cardView.addEventListener('click', () => {cards.classList.remove('dirList')}, true)