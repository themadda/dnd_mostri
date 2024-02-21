// Inserisci i dati dei mostri qui
var mostri = {
    "Goblin": 50,
    "Orco": 100,
    "Drago Rosso": 5900,
    
     // Aggiungi altri mostri qui...
};

// Funzione per aggiungere un mostro al database
function aggiungiMostro(nome, punteggio) {
    mostri[nome] = punteggio;
    // Salva il database aggiornato
    salvaMostri();
}

// Funzione per salvare il database dei mostri
function salvaMostri() {
    // Converte l'oggetto mostri in una stringa JSON
    var mostriJSON = JSON.stringify(mostri);
    // Salva la stringa JSON in localStorage con la chiave "mostri"
    localStorage.setItem("mostri", mostriJSON);
}

// Funzione per caricare i dati dei mostri dal localStorage
function caricaMostri() {
    // Recupera la stringa JSON dei mostri dal localStorage
    var mostriJSON = localStorage.getItem("mostri");
    // Se ci sono dati salvati, converte la stringa JSON in un oggetto JavaScript e aggiorna l'oggetto mostri
    if (mostriJSON) {
        mostri = JSON.parse(mostriJSON);
    }
}

// Carica i dati dei mostri al caricamento della pagina
caricaMostri();

// Event listener per il form di aggiunta del mostro
document.getElementById('Agg').addEventListener('submit', function (event) {
    event.preventDefault(); // Impedisce il ricaricamento della pagina

    // Ottiene i valori inseriti dall'utente
    var nomeMostro = document.getElementById('NomeMostro').value;
    var punteggioMostro = parseInt(document.getElementById('PeMostro').value);

    // Aggiunge il mostro al database
    aggiungiMostro(nomeMostro, punteggioMostro);

    // Aggiorna la visualizzazione dei mostri
    visualizzaMostri();
    modificaTesto(nomeMostro,punteggioMostro)
});

// Funzione per visualizzare i mostri nel database
function visualizzaMostri() {
    // Ottiene l'elemento HTML in cui visualizzare i mostri
    var listaMostriDiv = document.getElementById('lista_mostri');
    listaMostriDiv.innerHTML = ''; // Pulisce il contenuto precedente

    // Itera attraverso i mostri nel database e li aggiunge alla lista HTML
    for (var nomeMostro in mostri) {
        if (mostri.hasOwnProperty(nomeMostro)) {
            var punteggioMostro = mostri[nomeMostro];
            var listItem = document.createElement('li');
            listItem.textContent = nomeMostro + ': ' + punteggioMostro;
            listaMostriDiv.appendChild(listItem);
        }
    }
}

// Visualizza i mostri al caricamento della pagina
visualizzaMostri();







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


function calcolaPeM(numeroPG) {

    var selectNomeMostro1 = document.getElementById('nome_mostro1');
    var selectNomeMostro2 = document.getElementById('nome_mostro2');
    var selectNomeMostro3 = document.getElementById('nome_mostro3');
    var nomeMostro1 = selectNomeMostro1.options[selectNomeMostro1.selectedIndex].textContent;
    console.log("Nome mostro primo= " + nomeMostro1);
    var numeroMostri1 = parseInt(document.getElementById("numero_mostri1").value) ; // Converti la stringa in numero
    var nomeMostro2 = selectNomeMostro2.options[selectNomeMostro2.selectedIndex].textContent|| 0;
    var numeroMostri2 = parseInt(document.getElementById("numero_mostri2").value) || 0 ; // Converti la stringa in numero
    var nomeMostro3 = selectNomeMostro3.options[selectNomeMostro3.selectedIndex].textContent|| 0;
    var numeroMostri3 = parseInt(document.getElementById("numero_mostri3").value) || 0 ; // Converti la stringa in numero

    var PEperMostro1 = mostri[nomeMostro1] * numeroMostri1;
    var PEperMostro2 = nomeMostro2 ? (mostri[nomeMostro2] || 0) * numeroMostri2 : 0;
    var PEperMostro3 = nomeMostro3 ? (mostri[nomeMostro3] || 0) * numeroMostri3 : 0;
    var numeroMostri = numeroMostri1 + numeroMostri2 + numeroMostri3;

       var PEperMostri = PEperMostro1 + PEperMostro2 +PEperMostro3

    console.log("Per calcolo mostri prima del modificatore " + PEperMostri);
    if (numeroPG < 3) {
        if (numeroMostri == 1) {
            PEperMostri *= 1.5;
        } else if (numeroMostri == 2 ) {
            PEperMostri *= 2;
        } else if (numeroMostri >= 3 && numeroMostri <= 6) {
            PEperMostri *= 2.5;
        } else if (numeroMostri >= 7 && numeroMostri <= 10) {
            PEperMostri *= 3;
        } else if (numeroMostri >= 11 && numeroMostri <= 14) {
            PEperMostri *= 4;
        } else if (numeroMostri >= 15) {
            PEperMostri *= 5;
        }
    } else if (numeroPG >= 3 && numeroPG <= 5) {

        if (numeroMostri == 1) {
            PEperMostri *= 1;
        } else if (numeroMostri == 2 ) {
            PEperMostri *= 1.5;
        } else if (numeroMostri >= 3 && numeroMostri <= 6) {
            PEperMostri *= 2;
        } else if (numeroMostri >= 7 && numeroMostri <= 10) {
            PEperMostri *= 2.5;
        } else if (numeroMostri >= 11 && numeroMostri <= 14) {
            PEperMostri *= 3;
        } else if (numeroMostri >= 15) {
            PEperMostri *= 4;
        }


    } else {

        if (numeroMostri == 1) {
            PEperMostri *= 0.5;
        } else if (numeroMostri == 2 ) {
            PEperMostri *= 1;
        } else if (numeroMostri >= 3 && numeroMostri <= 6) {
            PEperMostri *= 1.5;
        } else if (numeroMostri >= 7 && numeroMostri <= 10) {
            PEperMostri *= 2;
        } else if (numeroMostri >= 11 && numeroMostri <= 14) {
            PEperMostri *= 2.5;
        } else if (numeroMostri >= 15) {
            PEperMostri *= 3;
        }
    }

console.log("Pe Per mostri tot: " + PEperMostri);
    stampaPE(PEperMostri, numeroPG);
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

document.querySelector('form#richiesta').addEventListener('submit', function (event) {
    event.preventDefault(); // Questo impedisce al form di inviare i dati e ricaricare la pagina

    var livelloPG = parseInt(document.getElementById("livello_pg").value);
    var numeroPG = parseInt(document.getElementById("quanti_pg").value);


    var PEperMostri = calcolaPeM(numeroPG);
    var [PEmedioF, PEmedioM, PEmedioD, PEmedioL] = calcolaPeP(livelloPG, numeroPG);
    var difficolta = determinaDifficolta(PEperMostri, PEmedioF, PEmedioM, PEmedioD, PEmedioL);

        // Ottieni l'elemento HTML in cui vuoi visualizzare il risultato
        var risultatoDiv = document.getElementById('risultato-difficolta');

        // Aggiorna il contenuto dell'elemento HTML con il risultato della funzione
        risultatoDiv.textContent = "La difficoltà è " + difficolta;
});

//--------------------------------------------------------------------------------------------------------------
function modificaTesto(nomeMostro,punteggioMostro) {

    console.log("sono dentro la funzione modificaTesto"); // Questo stamperà "Contenuto esistente" nella console
    
    document.getElementById('risultatoM').innerHTML = nomeMostro + " Inserito con Successo con Pe = " + punteggioMostro;
    
}

function stampaPE(PEperMostri, numeroPG){
console.log("Guadagno di PE=" + PEperMostri);

console.log("sono dentro la funzione stampaPE"); // Questo stamperà "Contenuto esistente" nella console
var calcoloPePg = PEperMostri/numeroPG;
document.getElementById('exp').innerHTML = "Esperienza Guadagnata dal fight per PG (singolarmente): " + calcoloPePg + "EXP";


}

//---------------------------------------------------------------------------------------------------------------


// // Funzione per rimuovere un mostro dal database
// function rimuoviMostro(nomeMostro) {
//     delete mostri[nomeMostro];
//     // Salva il database aggiornato
//     salvaMostri();
// }

// // Funzione per modificare il punteggio di un mostro nel database
// function modificaPunteggioMostro(nomeMostro, nuovoPunteggio) {
//     mostri[nomeMostro] = nuovoPunteggio;
//     // Salva il database aggiornato
//     salvaMostri();
// }

// // Event listener per il form di rimozione del mostro
// document.getElementById('rimuovi').addEventListener('submit', function (event) {
//     event.preventDefault(); // Impedisce il ricaricamento della pagina

//     // Ottiene il nome del mostro da rimuovere
//     var nomeMostroDaRimuovere = document.getElementById('NomeMostroDaRimuovere').value;

//     // Rimuove il mostro dal database
//     rimuoviMostro(nomeMostroDaRimuovere);

//     // Aggiorna la visualizzazione dei mostri
//     visualizzaMostri();
// });

// // Event listener per il form di modifica del punteggio del mostro
// document.getElementById('modifica').addEventListener('submit', function (event) {
//     event.preventDefault(); // Impedisce il ricaricamento della pagina

//     // Ottiene il nome del mostro da modificare
//     var nomeMostroDaModificare = document.getElementById('NomeMostroDaModificare').value;
//     // Ottiene il nuovo punteggio del mostro
//     var nuovoPunteggioMostro = parseInt(document.getElementById('NuovoPunteggioMostro').value);

//     // Modifica il punteggio del mostro nel database
//     modificaPunteggioMostro(nomeMostroDaModificare, nuovoPunteggioMostro);

//     // Aggiorna la visualizzazione dei mostri
//     visualizzaMostri();
// });

//---------------------------------------------------------------------------------------------------------

function popolaSelectMostri() {
    // Itera attraverso tutti gli input dei nomi dei mostri
    for (var i = 1; i <= 3; i++) {
        var selectId = 'nome_mostro' + i; // Genera l'id del select corrente
        var selectMostri = document.getElementById(selectId);

        // Pulisce il select precedente
        selectMostri.innerHTML = '';

        // Aggiunge un'opzione vuota o con valore nullo
        var optionNull = document.createElement('option');
        optionNull.textContent = 'Nessun mostro';
        optionNull.value = ''; // Puoi impostare il valore dell'opzione come vuoto o null
        selectMostri.appendChild(optionNull);

        // Itera attraverso i mostri nel database e crea un'opzione per ciascuno
        for (var nomeMostro in mostri) {
            if (mostri.hasOwnProperty(nomeMostro)) {
                var option = document.createElement('option');
                option.textContent = nomeMostro;
                option.value = mostri[nomeMostro]; // Puoi impostare il valore dell'opzione con il punteggio del mostro se necessario
                selectMostri.appendChild(option);
            }
        }

        // Event listener per il cambio del select
        selectMostri.addEventListener('change', function(event) {
            var selectedOption = this.options[this.selectedIndex];
            if (selectedOption.value) {
                // Se il valore dell'opzione è valido, puoi fare qualcosa con esso
                console.log('Hai selezionato il mostro ' + selectedOption.textContent + ' con punteggio ' + selectedOption.value);
            } else {
                // L'utente ha selezionato l'opzione vuota o con valore nullo
                console.log('Nessun mostro selezionato');
            }
        });
    }
}

// Chiamata alla funzione per popolare i select all'avvio
popolaSelectMostri();
