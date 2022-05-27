// input

let input = document.getElementById('search');
let icon = document.querySelector('.fa-search');
let inputBox = document.querySelector('.input-box');

function hideInput() {
  input.classList.add('hidden');
  icon.classList.remove('hidden');
  inputBox.style.margin = "0 0 0 0";
}

function showInput() {
  input.classList.remove('hidden');
  inputBox.style.margin = "0 0 40px 0";
}

function inputClick() {
  if (input.classList.contains('hidden')) {
    input.classList.remove('hidden');
    input.focus();
  } else {
    input.classList.add('hidden');
    input.blur();
  }
}

input.onblur = hideInput;

input.onfocus = showInput;

icon.onclick = inputClick;