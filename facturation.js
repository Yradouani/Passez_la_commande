 /* Info du local storage */
 
 /* Prénom */
let firstName = document.querySelector("#firstName").value;
 /* Nom */
let lastName = document.querySelector("#lastName").value;
 /* Nom de compagnie */
let businessName = document.querySelector("#businessName").value;
 /* Pays */
let country = document.querySelector("#country").value;
 /* Numero et nom de rue */
let street = document.querySelector("#street").value;
 /* Appartement */
let apartment = document.querySelector("#apartment").value;
 /* Code postal */
let postal = document.querySelector("#postal").value;
 /* Ville */
let city = document.querySelector("#city").value;
 /* Numéro de téléphone */
let tel = document.querySelector("#tel").value;
 /* Adresse mail */
let mail = document.querySelector("#mail").value;

let payer = document.querySelector("#payer");


 /* La commande */
 let productName = document.querySelector("#productName");
 let sousTotal = document.querySelector("#sousTotal");
 let livraison = document.querySelector("#livraison");
 let total = document.querySelector("#total");




function verif()
{ 
    let valid = true;
    let err = document.getElementById('error');
    let erreur = "";

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
 } else if (email.indexOf('@') == -1) { 
    erreur += '<p>Adresse e-mail incorrecte!</p>';
    err.style.display = "block"; 
    valid = false;
 }


 if (valid) {
    alert("Inscription Valide");
 }else {
     err.innerHTML = erreur;
 }
 return valid;
}



payer.addEventListener("onclick", => function verif())