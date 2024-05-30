const dropDownBtn = document.querySelector('.drop-down-btn');
const middleSection = document.querySelector('header .middle-section');
const rightSection = document.querySelector('header .right-section');

dropDownBtn.addEventListener('click', () => {
  middleSection.classList.toggle('middle-section--show');
  rightSection.classList.toggle('right-section--show');
})