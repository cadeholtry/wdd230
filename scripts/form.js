const password1 = document.querySelector("#password_input");
const password2 = document.querySelector("#password_input_2");
const message = document.querySelector("#password_message");

password2.addEventListener("focusout", checkSame);

function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = "Passwords do not match. Please re-enter your password.";
        message.style.visability = "show";
        password2.style.backgroundColor = "#fff0f3";
        password2.value = "";
        password2.focus();
    }
    else {
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
        password2.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}