document.addEventListener("DOMContentLoaded", ()=>{

    
  let formr=document.getElementById("formr");

  formr.addEventListener("submit",(e)=>{

   
     // Blocco invio dati

        let email=document.getElementById("email");
        let password=document.getElementById("password");
        let ripetipass=document.getElementById("ripeti");
        
        const regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        regexEmail.test(email.value);    

        regexPassword.test(password.value);

        let risultato=document.getElementById("risultato");

        if(regexPassword.test(password.value) && regexEmail.test(email.value) && ripetipass.value==password.value)
        {
          risultato.style.display="block";
          risultato.classList.remove("prevent");
          
          
        }

        else
        {
          e.preventDefault(); 
          risultato.style.display="block";
          risultato.style.backgroundColor="red";
          risultato.innerHTML="Dati non validi. Prova a modificare i dati e ritenta la registrazione"; 
        }

  }); // Funzione di registrazione con i regex

}); //DOMContentLoaded

