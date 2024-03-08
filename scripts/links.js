const baseURL = "https://cadeholtry.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.js`;
const linkArea = document.querySelector("#activities");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

const displayLinks = (activities) => {
    activities.forEach((activity) => {
        let lessons = document.createElement('section');
        let information = document.createElement('h4');
        if ((activity.links).length == 1) {
            activities.textContent = `Week ${activity.lesson}: <a href="${activity.links.url}" target="_blank">${activity.links.title}</a>`;
        }
        else {
            activities.textContent = "balls";
        }
        lessons.appendChild(information);
        linkArea.appendChild(lessons);
    });
}

getLinks();