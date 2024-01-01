document.addEventListener("DOMContentLoaded", ()=>{



    let forml=document.getElementById("forml");

  forml.addEventListener("submit",(e)=>{

   
         // Blocco invio dati

        let email=document.getElementById("email");
        let password=document.getElementById("password");

        const regexEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        regexEmail.test(email.value);    

        regexPassword.test(password.value);

        if(regexEmail.test(email.value) && regexPassword.test(password.value))
        {
            
            document.getElementById("errore").style.display="none";
        }

        else
        {
            document.getElementById("errore").style.display="block";
            e.preventDefault(); 
        }
    
    }); // Funzione di validazione dati di accesso
  

}); //DOMCOntentLoaded