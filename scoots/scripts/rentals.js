const check = 1;
const rentalsURL = "https://cadeholtry.github.io/wdd230/scoots/data/rentals.json";


async function getRentals() {
    const response = await fetch(rentalsURL);
    const data = await response.json();
    displayRentals(data.rentals);
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        console.log(`#type${check}`)
        const type = document.querySelector(`#type${check}`);
        console.log(type);
        type.innerHTML = rental.type;
        check += 1;
    });
}

getRentals();