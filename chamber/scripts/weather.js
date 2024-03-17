const currentTemp1 = document.querySelector('#day1');
const currentTemp2 = document.querySelector('#day2');
const currentTemp3 = document.querySelector('#day3');
const weatherIcon1 = document.querySelector('#weather-icon1');
const weatherIcon2 = document.querySelector('#weather-icon2');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDesc1 = document.querySelector('#figcaption1');
const captionDesc2 = document.querySelector('#figcaption2');
const captionDesc3 = document.querySelector('#figcaption3');
const date1 = document.querySelector('#date1');
const date2 = document.querySelector('#date2');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.67&lon=-121.17&units=imperial&appid=62a30b94367aa0bf58e88a9bb03368fa';
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = weekday[d.getDay()];
let tomorrow = weekday[d.getDay() + 1];
if (d.getDay() == 6) {
    tomorrow = weekday[0];
}
let theNextDay = weekday[(d.getDay() + 2)];
if (d.getDay() == 5) {
    theNextDay = weekday[0];
}
else if (d.getDay() == 6) {
    theNextDay = weekday[1];
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    date1.innerHTML = `${tomorrow}`;
    date2.innerHTML = `${theNextDay}`;
    currentTemp1.innerHTML = `${data.list[0].main.temp}&deg;F`;
    currentTemp2.innerHTML = `${data.list[1].main.temp}&deg;F`;
    currentTemp3.innerHTML = `${data.list[2].main.temp}&deg;F`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${data.list[1].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${data.list[2].weather[0].icon}.png`;
    let desc1 = data.list[0].weather[0].description;
    let desc2 = data.list[1].weather[0].description;
    let desc3 = data.list[2].weather[0].description;
    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', desc1);
    captionDesc1.textContent = `${desc1}`;
    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', desc2);
    captionDesc2.textContent = `${desc2}`;
    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', desc3);
    captionDesc3.textContent = `${desc3}`;
}



document.body.onload = function() {
    if ((d.getDay() > 0) && (d.getDay() < 4)) {
        var dd = document.getElementById("dropdown");
        dd.className = dd.className.replace("disabled", "");
    }
}
  
function closeDropdown() {
    document.getElementById("dropdown").className += " disabled";
}

apiFetch();