'use strict'



const startNowBtn = document.querySelector('.start__now');
const links = document.querySelector('.nav__links');
const remove = document.querySelector('.remove');
const pages = document.querySelectorAll('.nav__link');
const subMenu = document.querySelector('.sub__menu-1');

startNowBtn.addEventListener('click', () =>{
links.classList.remove('notes');
links.style.transitionDuration = '200ms';
});

const closeModal = function (){
    links.classList.add('notes')
    links.style.transitionDuration = '200ms';
  }
remove.addEventListener('click', closeModal);

    for(let i = 0; i <pages.length; i++){
        pages[i].addEventListener('click', closeModal);
        
      }
