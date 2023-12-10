const block = document.querySelector('.color_sheet');
const color = document.querySelector('.color_text');
const btn = document.querySelector('.generate');

const hex = '0123456789ABCDEF';
let randomColor = '#';

function getRandomColor() {
    randomColor = '#';

    for (let index = 0; index < 6; index++) {
        randomColor += hex[Math.floor(Math.random() * 16)];
    }
};

btn.addEventListener('click', () => {
    getRandomColor();
    block.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
});