/* RICHIESTA
-L’utente clicca su un bottone che genererà una griglia di gioco quadrata
-Ogni cella ha un numero progressivo, da 1 a 100
-Ci saranno quindi 10 caselle per ognuna delle 10 righe
-Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
-Emetto un messaggio in console con il numero della cella cliccata

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra 3 diverse difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const pulsantePlay = document.getElementById("pulsantePlay");
pulsantePlay.addEventListener("click", creaGriglia);

const containerGriglia = document.getElementById("containerGriglia");

function creaGriglia() {
    const elementoDiv = document.createElement("div");
    elementoDiv.classList.add("griglia");

    for (let i = 1; i <= 100; i++) {
        const elementoCella = document.createElement("div");
        elementoCella.classList.add("cella");
        elementoCella.innerHTML = [i];

        elementoCella.addEventListener("click", eventoAlClickCella);
        function eventoAlClickCella() {
            elementoCella.classList.add("cambioColore");
            console.log(elementoCella.textContent);
        }

        elementoDiv.append(elementoCella);
    }

    containerGriglia.append(elementoDiv);
}