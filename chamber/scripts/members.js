const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const membersURL = "https://cadeholtry.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let icon = document.createElement('img');
        name.textContent = member.name;
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Icon for ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        icon.setAttribute('width', '340');
        icon.setAttribute('height', '440');
        card.appendChild(name);
        card.appendChild(icon);
        display.appendChild(card);
    });
}

getMembers();