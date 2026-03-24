let randomNumber = (Math.random() * 100) + 1;
let tentatives = 0;

function checking(){
    let UtilisateurGuess = document.getElementByID('tentative');
    let message = document.getElementByID('message');
    tentatives++;

    if (UtilisateurGuess==randomNumber){
        message.innerHTML = `Félicitations! Vous avez trouvé le nombre ${randomNumber} en ${tentatives} .`;
        message.style.color = 'green';
    }
    else if (UtilisateurGuess > randomNumber){
        message.innerHTML = `Le nombre est plus grand`;
        message.style.color = `red`;
    }
    else if (UtilisateurGuess < randomNumber){
        message.innerHTML = `Le nombre est plus petit`;
        message.style.color = `red`;
    }
}    

