'use strict'


const overlay = document.querySelector('.overlay');

// Showing Topics for Mathematics
const heading = document.querySelector('.heading');
const grade = document.querySelector('.gradeslist');
const close = document.querySelector('.close-modal');

heading.addEventListener('click', ()=>{

grade.classList.remove('hidden');

});


close.addEventListener('click', ()=>{

    grade.classList.add('hidden');

    
    });

    // Showing Topics for Physics
    const heading1 = document.querySelector('.heading1');
    const g12Physics = document.querySelector('.grade12physics');
    const hide = document.querySelector('.hide-modal');

    heading1.addEventListener('click', ()=>{
   g12Physics.classList.remove('secret')
    })

    
hide.addEventListener('click', ()=>{

    g12Physics.classList.add('secret');


    
    });

    // Showing Topics for Chemistry
    
const heading2 = document.querySelector('.heading2');
const doNotShow = document.querySelector('.donotshow-modal');
const g12Chem = document.querySelector('.g12chemistry')


    heading2.addEventListener('click', ()=>{
        g12Chem.classList.remove('classified')
         })
     
         
     doNotShow.addEventListener('click', ()=>{
     
         g12Chem.classList.add('classified');
         
         });
    // Showing Topics for Biology

    const heading3 = document.querySelector('.heading3');
const display = document.querySelector('.display-modal');
const g12biology = document.querySelector('.g12biology');

         heading3.addEventListener('click', ()=>{
            g12biology.classList.remove('noshow')
             });
       
             display.addEventListener('click', ()=>{
                g12biology.classList.add('noshow')
             });

        // Showing Topics for Word
        const wordbtn = document.querySelector('.word-btn');
const word = document.querySelector('.word');
const wordmodal = document.querySelector('.word-modal');

wordbtn.addEventListener('click', ()=>{
    word.classList.remove('modal');
    overlay.classList.remove('modal');
     });

     wordmodal.addEventListener('click', ()=>{
        word.classList.add('modal');
        overlay.classList.add('modal');
        
     });

          // Showing Topics for Excel

          const excelbtn = document.querySelector('.excel-btn');
          const excel = document.querySelector('.excel');
          const excelmodal = document.querySelector('.excel-modal');
          
          excelbtn.addEventListener('click', ()=>{
              excel.classList.remove('modall')
               });
          
               excelmodal.addEventListener('click', ()=>{
                  excel.classList.add('modall')
               });
          // Showing Topics for Powerpoint
          const powerpointbtn = document.querySelector('.powerpoint-btn');
          const  powerpoint = document.querySelector('.powerpoint');
          const  powerpointmodal = document.querySelector('.powerpoint-modal');
          
          powerpointbtn.addEventListener('click', ()=>{
            powerpoint.classList.remove('modalll')
               });
          
               powerpointmodal.addEventListener('click', ()=>{
                powerpoint.classList.add('modalll')
               });




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

