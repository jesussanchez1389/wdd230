
const menuButton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation')

menuButton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


// select the elements to manipulate (output to)
const datefield = document.querySelector("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const year = now.getFullYear();
document.querySelector('#year').innerHTML = `${year}`;
document.querySelector("#modified").textContent = `Last Modification: ${document.lastModified}`;
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;


// Days between visits
let lastVisit = document.querySelector('.visits');

const lastvisit = Number(localStorage.getItem('lastvisit'));
const FACTOR = 1000 * 60 * 60 * 24;

// Subtract the last visit from the current visit or time
const currentvisit = Date.now() - lastvisit;

const daysbetween = currentvisit / FACTOR;

const visitAgain = `Hi! ${Math.round(daysbetween)} days have passed since your last time.`
const firstTime = 'Welcome, This is your first time here. Enjoy!'

// display to the page how many days since the user's last visit
if (lastvisit !== 0) {
  lastVisit.textContent = visitAgain;
} else {
  lastVisit.textContent = firstTime;
}

localStorage.setItem('lastvisit', Date.now())

// lazy load
let imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
  rootMargin: '0px 0px 50px 0px',
  threshold: 1,
}


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
}


if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    })
   }, imgOptions)
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  })
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  })
}




