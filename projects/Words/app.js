const text = document.querySelector('.input'),
    words = document.querySelector('.words'),
    characters = document.querySelector('.characters');

text.addEventListener('input', () => {
    words.innerHTML = text.value.trim().split(/\s+/).length;

    if(text.value.length === 0) {
        words.innerHTML = `1
        Да тут 1 хотя слов 0 мне похуй сори`;
    }

    characters.innerHTML = text.value.length;
});