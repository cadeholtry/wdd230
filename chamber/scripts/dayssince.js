const daysSinceElement = document.querySelector("#days");
const msToDays = 84600000;
const today = Number(Date.now())

let lastVisit = (Number(localStorage.getItem('lastDate'))) || -1;
let dayComparison = ((today - lastVisit) / msToDays).toFixed(0);

if (lastVisit == -1) {
    daysSinceElement.textContent = "Welcome! Let us know if you have any questions.";
}
else if (dayComparison == 0) {
    daysSinceElement.textContent = "Back so soon! Awesome!";
}
else if (dayComparison == 1) {
    daysSinceElement.textContent = "You last visited 1 day ago.";
}
else {
    daysSinceElement.textContent = "You last visited " + dayComparison + " days ago.";
}

localStorage.setItem('lastDate', today);