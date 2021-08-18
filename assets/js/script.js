$(document).ready(function(){
    $('#valid_btn').click(function(){
        // Création des variables des 5 notes et récupération de leurs valeurs dans l'input
        // parseFloat($('#monID').val() ) => .val si je veux ma value)
        // parseFloat est utiliser pour les nombres décimaux
        let noteOne = parseFloat($('#note1').val());
        let noteTwo = parseFloat($ ('#note2').val());
        let noteThree = parseFloat($ ('#note3').val());
        let noteFour = parseFloat($ ('#note4').val());
        let noteFive = parseFloat($ ('#note5').val());
        // Calcul de la moyenne
        let result = (noteOne + noteTwo + noteThree + noteFour+ noteFive)/5;
        // Vérification que les notes soit supérieur ou égale à 0 et inférieur ou égale à 20 
        // Cela permet aussi d'être valide qu'avec des chiffres
        if(noteOne >=0 && noteOne <=20 && noteTwo >=0 && noteTwo <=20 && noteThree >=0 && noteThree <=20 && noteFour >=0 && noteFour <=20 && noteFive >=0 && noteFive <=20){
        if (result >= 0 && result <10){
            $('#moyenne').html('En dessous de la moyenne.');
        }else if(result >= 10 && result <13){
            $('#moyenne').html('Moyen.');
        }else if(result >= 13 && result <16){
            $('#moyenne').html('Bien.');
        }else if(result >= 16 && result <20){
            $('#moyenne').html('Très bien.');
        }else if(result == 20){
            $('#moyenne').html('Excellent.');
        }}else{alert('attention note invalide')}
        });
});