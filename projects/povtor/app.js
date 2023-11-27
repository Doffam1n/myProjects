
// =================== люти кодик ====================== //


const inputText = document.querySelector('#text-input');
const textBlock = document.querySelector('#text-block');

inputText.addEventListener('input', function() {

    textBlock.innerText = inputText.value;

})
