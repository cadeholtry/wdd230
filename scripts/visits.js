const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(localStorage.getItem('visitNum')) || 0;

visitsDisplay.textContent = 'Number of Visits: ' + numVisits;

numVisits++;

localStorage.setItem("visitNum", numVisits);
