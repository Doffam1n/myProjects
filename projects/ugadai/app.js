const num = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt1 = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

console.log(num);

prompt1.addEventListener('submit', check);

function check (evt1) {
    evt1.preventDefault();
    console.log("чек");
    if (input.value == num) {
        ok();
    } else {
        no();
    }
    input.value = "";
};

function ok () {
    console.log("ок");
    vis("Вы победили!");
};

function no () {
    console.log("но");
    if (input.value > num) {
        vis("Число меньше");
    } else {
        vis("Число больше");
    }
};

function vis (data) {
    console.log("вис");
    output.innerText = data;
};

input.focus();



// Чел харош, Маргины, мне похуй, супер чел харош