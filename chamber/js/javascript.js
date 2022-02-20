
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
const visit = document.querySelector('.visits');

const lastvisit = localStorage.getItem('lastvisit');

const FACTOR = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;
console.log(daysbetween);

let numberoOfDays = daysbetween/FACTOR;

localStorage.setItem('lastvisit', Date.now());

visit.textContent = numberoOfDays;

// lazy load
let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


  if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });

    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }




