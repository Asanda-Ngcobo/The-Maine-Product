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

const video = document.querySelector('.introvideo');
const getout = document.querySelector('.getout');
const watchVideo = document.querySelector('.watch');

watchVideo.addEventListener('click', () => {
  video.classList.remove('notes');
 
});

getout.addEventListener('click', () => {
  video.classList.add('notes');


});
   
