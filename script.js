function userNameFunction() {
    let welcome;
    let name = prompt("What is your name?", "Enter here");
    if (name == null || name == "") {
        welcome = "No input.";
    } else {
        welcome = "Hey There " + name + "👋 Prepare your imagination because you are now a character in our little adventure 📖";
    }
    document.getElementById("greeting").innerHTML = welcome;
}
const btnClickHere = document.getElementById('btnClickHere');
btnClickHere.addEventListener('click', () => {
    // hide button
    btnClickHere.style.display = 'none'; });

const btnNext = document.getElementById('btnNext');
btnNext.addEventListener('click', () => {
    // hide button
    btnNext.style.display = 'none';})

const btnBegin = document.getElementById('btnBegin');
btnBegin.addEventListener('click', () => {
    //hide button
    btnBegin.style.display= 'none';})

function displayScenario() {
    let storySetting;
    storySetting = "You are sailing in the ocean with your friends Pete, Jenny, and Andrew.";
    document.getElementById("scenario").innerHTML = storySetting;
}

const btnNext2 = document.getElementById('btnNext2');
btnNext.addEventListener('click', () => {
    // hide button
    btnNext2.style.display = 'none';})