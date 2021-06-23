// console.log('hello world');

const nameSection = document.getElementById('name-section');
const pronounsSection = document.getElementById('pronouns-section');
// nameSection.innerText = "JoeJohn";
// nameSection.addEventListener('click', ()=>{
//     console.log('i am clicking this thing')
//     console.log(Math.random())
//     nameSection.innerText = "Why Would You CLick This";
// })

const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
// topSection.style.backgroundColor = "blue";
// bottomSection.style.backgroundColor = "blue";

const nameInput = document.getElementById('name-input');
const pronounsInput = document.getElementById('pronouns-input');
// nameInput.addEventListener('input', (event)=>{
//     console.log(event.target.value)
//     nameSection.innerText = event.target.value;
// })

const nameSubmitButton = document.getElementById('name-submit');
nameSubmitButton.addEventListener('click', ()=>{
    nameSection.innerText = nameInput.value;
})

const pronounsSubmitButton = document.getElementById('pronouns-submit');
pronounsSubmitButton.addEventListener('click', ()=>{
    pronounsSection.innerText = pronounsInput.value;
})

const pinkButton = document.getElementById('pink-button');
const lightGreenButton = document.getElementById('lightgreen-button');
const lightBlueButton = document.getElementById('lightblue-button');

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

// function addTwoNumbers(num1, num2){
//     return num1 + num2
// }

// console.log(addTwoNumbers(3,5))

// // Write a function called shout
// // input: any string
// // output: console.log the string in all uppercase


// function shout(word){
//     console.log(word.toUpperCase())
// };
// shout('i am not yelling');
// shout('hello');