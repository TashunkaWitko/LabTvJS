document.addEventListener("DOMContentLoaded", ()=>{


    let formc=document.getElementById("formc");

    

    formc.addEventListener("submit",(e)=>{

   
       const regexTel= /^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89])\d{7}$/;
       // regex di numeri di telefono italiani trovato stack-overflow

       const regexEmail= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
       
       let email=document.getElementById("email");
       let tel=document.getElementById("tel");

       regexTel.test(tel.value);
       regexEmail.test(email.value);

       if(regexEmail.test(email.value) && regexTel.test(tel.value))
        {
            document.getElementById("errore").style.display="none";
            
        }

        else
        {
            document.getElementById("domanda").style.maxHeight="100px";
            document.getElementById("errore").style.display="block";
            e.preventDefault(); 
        }
    
    
    
    }) //Funzione di validazione dati
});