const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');
const map = document.querySelector('iframe');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    map.classList.toggle('open');
});