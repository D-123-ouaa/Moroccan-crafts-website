let myForm=document.getElementById('myForm');
let nom=document.getElementById('INPUT1');
let prenom=document.getElementById('INPUT2');
let email=document.getElementById('INPUT3');
let password1=document.getElementById('INPUT4');
let password2=document.getElementById('INPUT5');

myForm.addEventListener('submit',function(event){
    let nom=document.getElementById('INPUT1');
    let prenom=document.getElementById('INPUT2');
    let email=document.getElementById('INPUT3');
    let password1=document.getElementById('INPUT4');
    let password2=document.getElementById('INPUT5');
    let hasEror=false;
    if(nom.value.trim()===""){
        nom.style.border="1px solid red";
        nom.style.borderRadius="5px";
        hasEror=true;
    }else{
        nom.style.border="none";
        nom.style.borderBottom="2px solid white";
        nom.style.borderRadius="0px";
    }
    if(prenom.value.trim()===""){
        prenom.style.border="1px solid red";
        prenom.style.borderRadius="5px";
        hasEror=true;
    }else{
        prenom.style.border="none";
        prenom.style.borderBottom="2px solid white";
        prenom.style.borderRadius="0px";
    }
    if(email.value.trim()===""){
        email.style.border="1px solid red";
        email.style.borderRadius="5px";
        hasEror=true;
    }else{
        email.style.border="none";
        email.style.borderBottom="2px solid white";
        email.style.borderRadius="0px";
    }
    if(password1.value.trim()===""){
        password1.style.border="1px solid red";
        password1.style.borderRadius="5px";
        hasEror=true;
    }else{
        password1.style.border="none";
        password1.style.borderBottom="2px solid white";
        password1.style.borderRadius="0px";
    }
    if(password2.value.trim()===""){
        password2.style.border="1px solid red";
        password2.style.borderRadius="5px";
        hasEror=true;
    }else{
        password2.style.border="none";
        password2.style.borderBottom="2px solid white";
        password2.style.borderRadius="0px";
    }
    if(hasEror){
        event.preventDefault();
    }
})
//Validation de l'nom:
nom.addEventListener('input', function(){
    let regexNom=/^[A-Za-z\s]+$/;
    if(!regexNom.test(nom.value.trim())){
        let existingError=document.querySelector('#NomContainer p');
        if(!existingError){
            let errorPlace=document.createElement('p');
            let errorText=document.createTextNode("Le nom est invalide!");
            errorPlace.appendChild(errorText);
            errorPlace.style.color="red";
            errorPlace.style.fontSize="13px";
            errorPlace.style.marginTop="0px";
            errorPlace.style.marginLeft="20px";
            errorPlace.style.fontFamily="Arial, sans-serif";
            let div=document.getElementById('NomContainer');
            div.appendChild(errorPlace);
        }else{
            let existingError=document.querySelector('#NomContainer p');
            if(existingError){
                existingError.remove();
            }
        }
    }
})
//validation de prénom:
prenom.addEventListener('input', function(){
    let regexPrenom=/^[A-Za-z\s]+$/;
    if(!regexPrenom.test(prenom.value.trim())){
        let existingError=document.querySelector('#PrenomContainer p');
        if(!existingError){
            let errorPlace=document.createElement('p');
            let errorText=document.createTextNode("Le prénom est invalide!");
            errorPlace.appendChild(errorText);
            errorPlace.style.color="red";
            errorPlace.style.fontSize="13px";
            errorPlace.style.marginTop="0px";
            errorPlace.style.marginLeft="50px";
            errorPlace.style.fontFamily="Arial, sans-serif";
            let div=document.getElementById('PrenomContainer');
            div.appendChild(errorPlace);
        }else{
            let existingError=document.querySelector('#PrenomContainer p');
            if(existingError){
                existingError.remove();
            }
        }
    }
})
//Validation de email:
email.addEventListener('input', function(){
    let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let existingError = document.querySelector('#EmailContainer p');

    if (!regexEmail.test(email.value.trim())) {
        if (!existingError) {
            let errorPlace = document.createElement('p');
            let errorText = document.createTextNode("L'email est invalide!");
            errorPlace.appendChild(errorText);
            errorPlace.style.color = "red";
            errorPlace.style.fontSize = "13px";
            errorPlace.style.marginTop = "0px";
            errorPlace.style.marginLeft = "20px";
            errorPlace.style.fontFamily = "Arial, sans-serif";
            let div = document.getElementById('EmailContainer');
            div.appendChild(errorPlace);
        }
    } else {
        // Si c’est valide, on supprime le message s’il existe
        if (existingError) {
            existingError.remove();
        }
    }
});


//Validation de password:
password1.addEventListener('input', function(){
    let regexPassword1=/^[a-zA-Z0-9\w_]{8,}$/;
    if(!regexPassword1.test(password1.value.trim())){
        let existingError=document.querySelector('#Password1Container p');
        if(!existingError){
            let errorPlace=document.createElement('p');
            let errorText=document.createTextNode("Le mot de passe est invalide!");
            errorPlace.appendChild(errorText);
            errorPlace.style.color="red";
            errorPlace.style.fontSize="13px";
            errorPlace.style.marginTop="0px";
            errorPlace.style.marginLeft="20px";
            errorPlace.style.fontFamily="Arial, sans-serif";
            let div=document.getElementById('Password1Container');
            div.appendChild(errorPlace);
        }else{
            let existingError=document.querySelector('#Password1Container p');
            if(existingError){
                existingError.remove();
            }
        }
    }
})
//Validation de mot de passe 2
password2.addEventListener('input', function(){
    if(password2!==password1){
        let existingError=document.querySelector('#Password2Container p');
        if(!existingError){
            let errorPlace=document.createElement('p');
            let errorText=document.createTextNode("Le mot de passe est incorrecte!");
            errorPlace.appendChild(errorText);
            errorPlace.style.color="red";
            errorPlace.style.fontSize="13px";
            errorPlace.style.marginTop="0px";
            errorPlace.style.marginLeft="20px";
            errorPlace.style.fontFamily="Arial, sans-serif";
            let div=document.getElementById('Password2Container');
            div.appendChild(errorPlace);
        }else{
            let existingError=document.querySelector('#Password2Container p');
            if(existingError){
                existingError.remove();
            }
        }
    }
})