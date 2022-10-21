const currentColor = document.querySelector('.color');
const button = document.querySelector('.btn_click_me');
const changedBody = document.querySelector('.container_bg_color');

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

button.addEventListener('click', () => {
  const randomNumber = getRandomNumber();

  changedBody.style.backgroundColor = color[randomNumber];
  currentColor.textContent = color[randomNumber];
});
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#000000';
  button.style.color = '#FFFFFF';
  button.style.cursor = 'pointer';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '';
  button.style.color = '';
});

function getRandomNumber() {
  return Math.floor(Math.random() * color.length);
}
