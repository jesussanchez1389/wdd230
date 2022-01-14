const date = new Date();
const year = date.getFullYear();
document.querySelector('#year').innerHTML = `${year}`;
document.querySelector('#modified').innerHTML = `Last Updated: ${document.lastModified}`;
