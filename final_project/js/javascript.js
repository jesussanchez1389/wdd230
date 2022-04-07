const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const year = now.getFullYear();
document.querySelector('#year').innerHTML = `${year}`;
document.querySelector("#modified").textContent = `Last Modification: ${document.lastModified}`;