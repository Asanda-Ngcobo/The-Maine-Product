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

// Check if the visitor's country matches the allowed country
function checkCountry() {
  // Replace 'XX' with the country code you want to allow
  const allowedCountry = 'ZA';
  
  
  // Make an API call to get the visitor's country
  fetch('https://api.ipgeolocationapi.com/geolocate')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const visitorCountry = data.country_code2;
      
      // Redirect if the visitor's country doesn't match the allowed country
      if (visitorCountry !== allowedCountry) {
        window.location.href = 'https://ecolie.co.za/restricted.html'; // Replace with your restricted page URL
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
}
   
