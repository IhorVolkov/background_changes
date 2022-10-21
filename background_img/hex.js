const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('.btn_click_me');
const color = document.querySelector('.color');
const changedBody = document.querySelector('.container_bg_color');

btn.addEventListener('click', function () {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomData()];
  }
  console.log(btn);
  color.textContent = hexColor;
  changedBody.style.backgroundColor = hexColor;
});

btn.addEventListener('mouseover', () => {
  btn.style.backgroundColor = 'black';
  btn.style.color = 'white';
  btn.style.cursor = 'pointer';
});

btn.addEventListener('mouseout', () => {
  btn.style.backgroundColor = '';
  btn.style.color = '';
});

function getRandomData() {
  return Math.floor(Math.random() * hex.length);
}
