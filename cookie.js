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
   