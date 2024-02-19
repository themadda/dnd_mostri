// Inserisci i dati dei mostri qui
var mostri = {
    "Goblin": 50,
    "Orco": 100,
    "Drago Rosso": 5900
    // Aggiungi altri mostri qui...
};

function determinaDifficolta(PEperMostri,PEmedioF, PEmedioM, PEmedioD, PEmedioL){
    var diffic;
    if (PEperMostri <= PEmedioF) {
        diffic = "Facile";
       console.log("Facile!")

    } else if (PEperMostri > PEmedioF && PEperMostri < PEmedioM ) {
        diffic = "Facile - Medio";
        console.log("Facile - Medio")

    } else if (PEperMostri == PEmedioM) {
        diffic = "Medio";
        console.log("Medio")

    }  else if (PEperMostri > PEmedioM && PEperMostri < PEmedioD) {
        diffic = "Medio - Difficile";
        console.log("Medio - Difficile")

    }else if (PEperMostri == PEmedioD) {
        diffic = "Difficile";
        console.log("Difficile")

    }else if (PEperMostri > PEmedioD && PEperMostri < PEmedioL) {
        diffic = "Difficile - Letale";
        console.log("Difficile - Letale")

    }else if (PEperMostri == PEmedioL) {
        diffic = "Letale";
        console.log("Letale")

    }else if (PEperMostri > PEmedioL) {
        diffic = "Oltre ogni immaginazione";
        console.log("Oltre ogni immaginazione")

    }
    
    return diffic;
}

// function calcolaPeM(mostri, numeroPG) {
//     var punteggioSfidaTotale = 0;

//     for (var i = 1; i <= 3; i++) { // Assumendo che ci siano solo 3 mostri
//         var nomeMostro = document.getElementById('nome_mostro' + i).value;
//         var numeroMostri = parseInt(document.getElementById('numero_mostri' + i).value);

//         var PEperMostro = mostri[nomeMostro] * numeroMostri;

//         // Calcolo del punteggio di sfida per il mostro corrente
//         if (numeroPG < 3) {
//             if (numeroMostri == 1) {
//                 PEperMostro *= 1.5;
//             } else if (numeroMostri == 2) {
//                 PEperMostro *= 2;
//             } else {
//                 PEperMostro *= 2.5;
//             }
//         } else if (numeroPG >= 3 && numeroPG <= 5) {
//             if (numeroMostri == 1) {
//                 PEperMostro *= 1;
//             } else if (numeroMostri == 2) {
//                 PEperMostro *= 1.5;
//             } else {
//                 PEperMostro *= 2;
//             }
//         } else {
//             if (numeroMostri == 1) {
//                 PEperMostro *= 0.5;
//             } else if (numeroMostri == 2) {
//                 PEperMostro *= 1;
//             } else {
//                 PEperMostro *= 1.5;
//             }
//         }

//         // Aggiungi il punteggio di sfida del mostro corrente al punteggio totale
//         punteggioSfidaTotale += PEperMostro;
//     }

//     return punteggioSfidaTotale;
// }



function calcolaPeM1(nomeMostro1, numeroMostri1, numeroPG) {


    
    var PEperMostri = mostri[nomeMostro1] * numeroMostri1;
    console.log("Pe calcolo mostri prima del modificatore" + PEperMostri);
    if (numeroPG < 3) {
        if (numeroMostri1 == 1) {
            PEperMostri *= 1.5;
        } else if (numeroMostri1 == 2 ) {
            PEperMostri *= 2;
        } else if (numeroMostri1 >= 3 && numeroMostri1 <= 6) {
            PEperMostri *= 2.5;
        } else if (numeroMostri1 >= 7 && numeroMostri1 <= 10) {
            PEperMostri *= 3;
        } else if (numeroMostri1 >= 11 && numeroMostri1 <= 14) {
            PEperMostri *= 4;
        } else if (numeroMostri1 >= 15) {
            PEperMostri *= 5;
        }
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}
    } else if (numeroPG >= 3 && numeroPG <= 5) {

        if (numeroMostri1 == 1) {
            PEperMostri *= 1;
        } else if (numeroMostri1 == 2 ) {
            PEperMostri *= 1.5;
        } else if (numeroMostri1 >= 3 && numeroMostri1 <= 6) {
            PEperMostri *= 2;
        } else if (numeroMostri1 >= 7 && numeroMostri1 <= 10) {
            PEperMostri *= 2.5;
        } else if (numeroMostri1 >= 11 && numeroMostri1 <= 14) {
            PEperMostri *= 3;
        } else if (numeroMostri1 >= 15) {
            PEperMostri *= 4;
        }


    } else {

        if (numeroMostri1 == 1) {
            PEperMostri *= 0.5;
        } else if (numeroMostri1 == 2 ) {
            PEperMostri *= 1;
        } else if (numeroMostri1 >= 3 && numeroMostri1 <= 6) {
            PEperMostri *= 1.5;
        } else if (numeroMostri1 >= 7 && numeroMostri1 <= 10) {
            PEperMostri *= 2;
        } else if (numeroMostri1 >= 11 && numeroMostri1 <= 14) {
            PEperMostri *= 2.5;
        } else if (numeroMostri1 >= 15) {
            PEperMostri *= 3;
        }
    }

console.log("Pe Per mostri tot: " + PEperMostri);
    return PEperMostri;
}

function calcolaPeP(livelloPG, numeroPG) {
    var PEperLivelloF = [0, 25, 50, 75, 125, 250, 300, 350, 450, 550, 600, 800, 1000, 1100, 1250, 1400, 1600, 2000, 2100, 2400, 2800];
    var PEperLivelloM = [0, 50, 100, 150, 250, 500, 600, 750, 900, 1100, 1200, 1600, 2000, 2200, 2500, 2800, 3200, 3900, 4200, 4900, 5700];
    var PEperLivelloD = [0, 75, 150, 225, 375, 750, 900, 1100, 1400, 1600, 1900, 2400, 3000, 3400, 3800, 4300, 4800, 5900, 6300, 7300, 8500];
    var PEperLivelloL = [0, 100, 200, 400, 500, 1100, 1400, 1700, 2100, 2400, 2800, 3600, 4500, 5100, 5700, 6400, 7200, 8800, 9500, 10900, 12700];
    var PEmedioF = PEperLivelloF[livelloPG] * numeroPG;
    var PEmedioM = PEperLivelloM[livelloPG] * numeroPG;
    var PEmedioD = PEperLivelloD[livelloPG] * numeroPG;
    var PEmedioL = PEperLivelloL[livelloPG] * numeroPG;
    console.log("Pe calcolo partyF" + PEmedioF);
    console.log("Pe calcolo partyM" + PEmedioM);
    console.log("Pe calcolo partyD" + PEmedioD);
    console.log("Pe calcolo partyL" + PEmedioL);
    return [PEmedioF, PEmedioM, PEmedioD, PEmedioL];
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Questo impedisce al form di inviare i dati e ricaricare la pagina
    var nomeMostro1 = document.getElementById('nome_mostro1').value;
    var numeroMostri1 = document.getElementById('numero_mostri1').value;
    var nomeMostro2 = document.getElementById('nome_mostro2').value;
    var numeroMostri2 = document.getElementById('numero_mostri2').value;
    var nomeMostro3 = document.getElementById('nome_mostro3').value;
    var numeroMostri3 = document.getElementById('numero_mostri3').value;
    var livelloPG = document.getElementById("livello_pg").value;
    var numeroPG = document.getElementById("quanti_pg").value;
    

    console.log(nomeMostro1);

    var PEperMostri = calcolaPeM1(nomeMostro1, numeroMostri1, numeroPG);
    var [PEmedioF, PEmedioM, PEmedioD, PEmedioL] = calcolaPeP(livelloPG, numeroPG);
    var difficolta = determinaDifficolta(PEperMostri, PEmedioF, PEmedioM, PEmedioD, PEmedioL);

        // Ottieni l'elemento HTML in cui vuoi visualizzare il risultato
        var risultatoDiv = document.getElementById('risultato-difficolta');

        // Aggiorna il contenuto dell'elemento HTML con il risultato della funzione
        risultatoDiv.textContent = "La difficoltà è " + difficolta;




});
