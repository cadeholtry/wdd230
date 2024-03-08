const baseURL = "https://cadeholtry.github.io/wdd230/";
const linksURL = "https://cadeholtry.github.io/wdd230/data/links.json";
const linkArea = document.querySelector("#activities");

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (lessons) => {
    lessons.forEach((activity) => {
        let lessons = document.createElement('section');
        let information = document.createElement('h4');
        information.textContent = `Week ${activity.lesson}: `;
        let checker = (activity.links).length;
        while (checker > 0) {
            let link = document.createElement('a');
            link.setAttribute('href', activity.links[checker - 1].url);
            link.textContent = activity.links[checker - 1].title;
            information.append(link);
            if (checker > 1) {
                information.append(' | ');
            }
            checker -= 1;
        }
        lessons.appendChild(information);
        linkArea.appendChild(lessons);
    });
}

getLinks();