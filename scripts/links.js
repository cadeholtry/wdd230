const baseURL = "https://cadeholtry.github.io/wdd230/";
const linksURL = `${baseURL}/data/links.js`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

}

getLinks();