const currentyear = {year: 'numeric'};
document.getElementById('currentyear').textContent = new Date().toLocaleDateString('en-US', currentyear);
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;