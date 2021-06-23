// Name and Pronouns section
const nameSection = document.getElementById('name-section');
const pronounsSection = document.getElementById('pronouns-section');
const nameInput = document.getElementById('name-input');
const pronounsInput = document.getElementById('pronouns-input');

// Name tag color section
const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');

// Button defining section
const nameSubmitButton = document.getElementById('name-submit');
const pronounsSubmitButton = document.getElementById('pronouns-submit');
const pinkButton = document.getElementById('pink-button');
const lightGreenButton = document.getElementById('lightgreen-button');
const lightBlueButton = document.getElementById('lightblue-button');

//Event Listeners section
nameSubmitButton.addEventListener('click', ()=>{
    nameSection.innerText = nameInput.value;
})

pronounsSubmitButton.addEventListener('click', ()=>{
    pronounsSection.innerText = pronounsInput.value;
})

pinkButton.addEventListener('click', ()=>{
    topSection.style.backgroundColor = "pink";
    bottomSection.style.backgroundColor = "pink";
})

lightGreenButton.addEventListener('click', ()=>{
    topSection.style.backgroundColor = "lightgreen";
    bottomSection.style.backgroundColor = "lightgreen";
})

lightBlueButton.addEventListener('click', ()=>{
    topSection.style.backgroundColor = "lightblue";
    bottomSection.style.backgroundColor = "lightblue";
})

