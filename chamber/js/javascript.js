
const menubutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// select the elements to manipulate (output to)
const datefield = document.querySelector("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const year = now.getFullYear();
document.querySelector('#year').innerHTML = `${year}`;

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;


