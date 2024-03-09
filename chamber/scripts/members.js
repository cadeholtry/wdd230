const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

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
        let name = document.createElement('p');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let icon = document.createElement('img');
        let link = document.createElement('a');
        link.setAttribute('href', member.website);
        link.textContent = member.website;
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        icon.setAttribute('src', member.icon);
        icon.setAttribute('alt', `Icon for ${member.name}`);
        icon.setAttribute('loading', 'lazy');
        name.setAttribute('id', 'name');
        card.setAttribute('id', member.level);
        card.appendChild(icon);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(link);
        display.appendChild(card);
    });
}

getMembers();