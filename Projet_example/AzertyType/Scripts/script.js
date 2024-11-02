
    

   /*  //createElement() permet d'inserer une nouvelle balise dans notre html
    let nouvelElement = document.createElement("div");
    //inserer la balise dans notre page
    let parentElement = document.getElementById("conteneur");
    //ajouter le nouvel élément au parent
    parentElement = document.appendChild(nouvelElement);
 */

   /*  let monButton = document.getElementById("monBouton")
    monButton.addEventListener("click", (event) => {
        console.log(event)
    //}) */
   
 // creons deux fonctions afficherResultat() et choisirPhrasesOuMots()

 function afficherResultat( score, nbMotsProposés){
    //affiche le resultat du joueur
    //console.log("votre score est " + score + " sur " + nbMotsProposés);

    let spanScore = document.querySelector(".zoneScore span")
    // Ecriture du texte
    let affichageScore = `${score} / ${nbMotsProposés}`

    //On place le texte à l'interieur du span
    spanScore.innerText = affichageScore

 }

 function affichageProposition(proposition){

    let zoneProposition = document.querySelector(".zoneProposition");
    zoneProposition.innerText = proposition;
}

 /* function choisirPhrasesOuMots(){

   // let choix = prompt("Veux tu jouer avec des phrases(entrez des phrases) ou des mots(entrez des mots) ? ")
    while (choix !== "mots" && choix !== "phrases"){
       // choix = prompt("Veuillez choisir la liste: mots ou phrases");
    }
    return choix;
    
 } */


 //creons la fonction boucleDeJeu() qui va permet de faire entrer les mots ou les phrases par l'utilisateur

 /* function boucleDeJeu(listePropositions){

        let score = 0;
        for(let i = 0; i < listePropositions.length; ++i){

           // motUtilisateur = prompt("Entrez votre mot/phrase: " + listePropositions[i]);
        
            if(motUtilisateur === listePropositions[i]){
                score++;
            }
        }

        return score;
    } */

        function afficherEmail(nom, email, score) {
            let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
            location.href = mailto
        }
    

//creons maintenant la fonction lancerJeu()

function lancerJeu(){

   
    let score = 0;
    


     /*if(choix === "mots"){
        score = boucleDeJeu(listeMots);
        nbMotsProposés = listeMots.length ;
    }else{
        score = boucleDeJeu(listePhrases)
        nbMotsProposés = listePhrases.length;
    }*/
   

   
    let i = 0;

    let Envoyer = document.getElementById("btnValiderMot")
    let InputEcriture = document.getElementById("inputEcriture");
    affichageProposition(listeMots[i]);
   Envoyer.addEventListener("click", (event) =>{
        console.log(InputEcriture.value)
        if(InputEcriture.value === listeMots[i]){
            score = score + 1
            
        } 
       i++;
       afficherResultat(score, listeMots.length); 
       InputEcriture.value = '' // permet de vider la valeur du champ de texte après avoir saisi un mot et cliquez sur le bouton envoyer
       if(listeMots[i] === undefined){
        affichageProposition("le partie est terminée !");
        Envoyer.disabled = true; //permet de desactiver le bouton envoyer
       }else{
        affichageProposition(listeMots[i]);
       }
      
    } )
        
    
    //Gestion de l'évènement qui change les boutons radio
    let listeBtnRadio = document.querySelectorAll(".optionSource input")
    for(let i = 0; i < listeBtnRadio.length; ++i){
        listeBtnRadio[i].addEventListener("change" , (event) => {
            // Si c'est le premier élément qui a été modifié, alors nous voulons
            // jouer avec la listeMots. 
            if(event.target.value === "1"){
                listePropositions = listeMots
            }else{
                //sinon nous voulons jouer avec la liste de phrases
                listePropositions = listePhrases
            }
            affichageProposition(listePropositions[i])
        })


    }


     

    afficherResultat(score, i); 

    /* function verifychamp(balise){
        if(balise.value === ""){
            balise.classList.add("error")
        }else{
            balise.classList.remove("error")
        }
    }
 */
   
    function validerNom(nom){
       if(nom.length >= 2){
        return true;
       }

       return false;
    }

    
    function validerEmail(email){

        //verifions que le champ ait la syntaxe d'une email
        let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
        let resultat = regex.test(email);

        if(resultat){
            return true;
        }

        return false;
        
    }
    const form = document.querySelector(".shareScore form")

    form.addEventListener("submit", (event) =>{

        //on empêche le comportement par défaut

        event.preventDefault();
        //console.log("Il n'ya pas eu de rechargement de la page")

        //on recupere les deux champs et on affiche la valeur
       let nom = document.getElementById("nom");
        let nomValue = nom.value;
      
       //console.log(nom.value)
       let email = document.getElementById("email");
       let emailValue = email.value;
      
      // console.log(email.value);
      

       if(validerNom(nomValue) && validerEmail(emailValue)){
        let scoreEmail = `${score} / ${i}`
        afficherEmail(nomValue, emailValue, scoreEmail);
         }else{
            console.log("erreur")
            //ecrire un message d'erreur
         }

         afficherEmail(nomValue, emailValue, scoreEmail);
       

    });
    // exemple de code qui permet de mettre en place des règles de validation
   
   /* let chaine = "cachalot"; // Testez avec des chiffres pour voir la différence
  let regex = new RegExp("^[a-z]+$");
   let resultat = regex.test(chaine);
   console.log(resultat); // Affiche true. */


    

}















