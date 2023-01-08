 /* Info du local storage */
let storage = JSON.parse(localStorage.getItem("orderDishes"));
 /* Prénom */
let firstName = document.querySelector("#firstName");
 /* Nom */
let lastName = document.querySelector("#lastName");
 /* Nom de compagnie */
let businessName = document.querySelector("#businessName");
 /* Pays */
let country = document.querySelector("#country");
 /* Numero et nom de rue */
let street = document.querySelector("#street");
 /* Appartement */
let apartment = document.querySelector("#apartment");
 /* Code postal */
let postal = document.querySelector("#postal");
 /* Ville */
let city = document.querySelector("#city");
 /* Numéro de téléphone */
let tel = document.querySelector("#tel");
 /* Adresse mail */
let mail = document.querySelector("#mail");
 /* Carte bancaire */
let bankCardNo = document.querySelector("#carte");
 /* Date d'expiration Carte bancaire */
let expi = document.querySelector("#expi");
 /* Numéro Verso carte bancaire */
let verso = document.querySelector("#verso");

 /* Prix total de la commande */
 let total = document.querySelector("#price");





let payer = document.querySelector("#payer");
let err = document.querySelector("#error");
let erreur = "";


function verif(){ 

    let valid = true;

    /* Vérif tel*/ 
 let taille = tel.length;
 for(let i=0; i<taille; ++i) {
    if ((tel.charAt(i) < "0") || (tel.charAt(i) > "9") || (taille!=10)){
        erreur += '<p>Veuillez taper votre numéro de téléphone</p>';
        err.style.display = "block"; 
    }
 }

    /* Vérif  firstname */
 if(firstName.length <= 0) { 
    erreur += '<p>Veuillez taper votre prénom!</p>';
    err.style.display = "block"; 
    valid = false;
 }
 /* Vérif  lastname */
 if(lastName.length <= 0) { 
    erreur += '<p>Veuillez taper votre nom!</p>';
    err.style.display = "block"; 
    valid = false;
 }
 /* Vérif mail */

 if(mail.length <= 0) { 
    erreur += '<p>Veuillez entrer votre adresse e-mail!</p>';
    err.style.display = "block"; 
    valid = false;
 } else if (mail.indexOf('@') == -1) { 
    erreur += '<p>Adresse e-mail incorrecte!</p>';
    err.style.display = "block"; 
    valid = false;
 }
 /* Vérif Carte bancaire */
 if(bankCardNo.lenght != 16){
    erreur += '<p>Numéro de carte banquaire incorrect!</p>';
    err.style.display = "block"; 
    valid = false;
 }
 /* Vérif Date d'expiration */
 if(expi.lenght <= 0){
    erreur += "<p>Numéro d'expiration incorrect!</p>";
    err.style.display = "block"; 
    valid = false;
 }else if (expi.indexOf('/') == -1) { 
    erreur += "<p>Numéro d'expiration incorrect!</p>";
    err.style.display = "block"; 
    valid = false;
 }
 /* Vérif Numéro Verso carte bancaire */
 if(verso.lenght != 3){
    erreur += "<p>Numéro au Verso incorrect!</p>";
    err.style.display = "block"; 
    valid = false;
 }


 if (valid) {
    alert("Payement Complété, </br> les informations de la commande vous seront envoyées par mail.");
 }else {
     err.innerHTML = erreur;
 }
 return valid;
}



payer.addEventListener("onclick", verif());