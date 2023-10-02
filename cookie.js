'use strict'

    
    
               
           //cookie bunner
           const cookieContainer = document.querySelector(".cookie-container");
    const cookieButton = document.querySelector(".cookie-btn");
    
    cookieButton.addEventListener("click", () => {
        cookieContainer.classList.remove("active");
        localStorage.setItem("cookieBunnerDisplayed", "true");
    });
    
    setTimeout(()=> {
        if(!localStorage.getItem("cookieBunnerDisplayed")){
    cookieContainer.classList.add("active")
        }
    }, 4000);



const startNowBtn = document.querySelectorAll('.start__now');
const links = document.querySelector('.nav__links');
const remove = document.querySelector('.remove');
const pages = document.querySelectorAll('.nav__link');
const subMenu = document.querySelector('.sub__menu-1');


const openModal = function (){
  links.classList.remove('notes')
  links.style.transitionDuration = '200ms';

};

const closeModal = function (){
  links.classList.add('notes')
  links.style.transitionDuration = '200ms';
}


for(let i = 0; i < startNowBtn.length; i++)
startNowBtn[i].addEventListener('click', openModal);

remove.addEventListener('click', closeModal);
   
for(let i = 0; i <pages.length; i++){
  pages[i].addEventListener('click', closeModal);
  
}
