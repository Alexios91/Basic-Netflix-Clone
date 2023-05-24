document.addEventListener("DOMContentLoaded",function(){

/* ONCLICK SUI BOTTONI */
    let bottoneAccedi=document.getElementById("log");
    bottoneAccedi.onclick = function (){
        document.getElementById("modulo1").style.display="block";
        document.getElementById("container").style.display="none";
        document.getElementById("modulo2").style.display="none";
        document.getElementById("modulo3").style.display="none";
    }

    let bottoneRegistrati=document.getElementById("sign");
    bottoneRegistrati.onclick = function (){
        document.getElementById("modulo2").style.display="block";
        document.getElementById("modulo1").style.display="none";
        document.getElementById("container").style.display="none";
        document.getElementById("modulo3").style.display="none";
    }

    let bottoneRegistrati2=document.getElementById("sign2");
    bottoneRegistrati2.onclick = function (){
        document.getElementById("modulo2").style.display="block";
        document.getElementById("modulo1").style.display="none";
        document.getElementById("container").style.display="none";
        document.getElementById("modulo3").style.display="none";
    }

    let bottoneContatti=document.getElementById("contatta");
    bottoneContatti.onclick = function (){
        document.getElementById("modulo3").style.display="block";
        document.getElementById("modulo1").style.display="none";
        document.getElementById("modulo2").style.display="none";
        document.getElementById("container").style.display="none";
    }
/* ONCLICK SUI BOTTONI */

/* ONSUBMIT ACCEDI */
    document.querySelector("form").onsubmit=function(e){
        e.preventDefault();

        /*controllo mail*/
        let mail=document.getElementById("email");

        if(mail.value.trim().length==0){
            mail.classList.add("errore");
            mail.nextElementSibling.innerHTML="La mail è obbligatoria";
        }

        else{
            let checkMail=controllaEmail(mail.value.trim());

            if(!checkMail){
                mail.classList.add("errore");
                mail.nextElementSibling.innerHTML="Scrivi una email valida";
            }
            else{
                mail.classList.remove("errore");
            } 
        }

        /* CONTROLLO PASSWORD */
        let pas=document.getElementById("pass");

        if(pas.value.trim().length==0){
            pas.classList.add("errore");
            pas.nextElementSibling.innerHTML="La password è obbligatoria";
        }

        else{
            let checkPass=controllaPass(pas.value.trim());
            
            if(!checkPass){
                pas.classList.add("errore");
                pas.nextElementSibling.innerHTML="Password errata";
            }
            else{
                pas.classList.remove("errore");
            } 
        }

    };
/* ONSUBMIT ACCEDI */

}); //DOMContentLoaded


function controllaNome(nome)
{
    let regex=/^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/

    return regex.test(nome);    
}

function controllaEmail(email)
{
    let regex=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return regex.test(email);    
}

function controllaPass(pass)
{
    let regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

    return regex.test(pass);    
}

function controllaCell(tel)
{
    let regex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

    return regex.test(tel);    
}
