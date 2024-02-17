const currenttemp = 50;
const currentmph = 4;
if (currenttemp <= 50 && currentmph > 3) {
    document.getElementById('windchill').innerHTML = 35.74 + (0.6215 * currenttemp) - (35.75 * (currentmph ** 0.16)) + (0.4275 * currenttemp * (currentmph ** 0.16));
}
else {
    document.getElementById('windchill').innerHTML = "N/A";
}