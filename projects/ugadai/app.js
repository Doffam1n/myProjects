const num = Math.floor(Math.random() * 100);
let guesses = 0;

const output = document.querySelector('#output');
const prompt1 = document.querySelector('#prompt');
const input = document.querySelector('#prompt input');

console.log(num);

prompt1.addEventListener('submit', check);

function check (evt1) {
    evt1.preventDefault();
    if (input.value == num) {
        ok();
    } else {
        no();
    }
    input.value = "";
    console.log("чек");
};

function ok () {
 vis("Вы победили!");
 console.log("ок");
};

function no () {
    if (input.value > num) {
        vis("Число меньше");
    } else {
        vis("Число больше");
    }
    console.log("но");
};

function vis (data) {
    output.innerText = data;
    console.log("вис");
};

input.focus();



// Чел харош, Маргины, мне похуй, 