let check = 1;
const rentalsURL = "https://cadeholtry.github.io/wdd230/scoots/data/rentals.json";


async function getRentals() {
    const response = await fetch(rentalsURL);
    const data = await response.json();
    displayRentals(data.rentals);
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        const type = document.querySelector(`#type${check}`);
        type.innerHTML = rental.type;
        const persons = document.querySelector(`#persons${check}`);
        persons.innerHTML = rental.persons;
        const rhalf = document.querySelector(`#rhalf${check}`);
        rhalf.innerHTML = rental.reservation[0].half;
        const whalf = document.querySelector(`#whalf${check}`);
        whalf.innerHTML = rental.walkin[0].half;
        const rfull = document.querySelector(`#rfull${check}`);
        rfull.innerHTML = rental.reservation[0].full;
        const wfull = document.querySelector(`#wfull${check}`);
        wfull.innerHTML = rental.walkin[0].full;
        check = check + 1;
    });
}

getRentals();