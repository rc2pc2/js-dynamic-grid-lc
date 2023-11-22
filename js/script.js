
// recupero il parent all'interno del quale voglio inserire i miei elementi
const mainContentEl = document.querySelector('main section.main-content');

const startButtonEl = document.querySelector('button#button-start');

startButtonEl.addEventListener('click', function(){
    mainContentEl.innerHTML = '';

    // # per 81 iterazioni...
    for (let i = 1 ; i <= 81 ; i++){
        // # creo un nuovo elemento quadrato, una nuova cella nel mio quadrato
        const currentSquare = getNewSquare();

        // # inizializzo il suo contenuto per poterlo utilizzare anche piu' avanti
        const squareContent = i;

        // # aggiungo il contenuto all'elemento che voglio popolare
        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

        // # aggiungo il comportamento che preveda che se il numero interno sia pari allora diventera' blu al click, altrimenti diventera' rosso.
        if ( squareContent % 2 === 0){
            currentSquare.classList.add('bg-blue');
        } else {
            currentSquare.classList.add('bg-red');
        }

        // % quando clicco su una di queste celle
        currentSquare.addEventListener('click', function(){
            // % metto o  tolgo la classe css clicked allo stesso elemento
            currentSquare.classList.toggle('clicked'); // si potrebbe sostituire a currentSquare il this

            console.log(squareContent);
        });

        // & aggiungo la cella completa all'elemento a cui voglio aggiungerla nel DOM.
        mainContentEl.appendChild(currentSquare);
    }
});


// ? ------ Functions ------ ?

/**
 * Creates a new square element, an article with class 'item-square' and returns it to the caller.
 *
 * @returns The new created square element.
 */
function getNewSquare(){
    const newSquareElement = document.createElement('article');
    newSquareElement.classList.add('item-square');
    return newSquareElement;
}

/**
 * This function generates a new random number included within the given range.
 *
 * @param minNumber The minimum required number, included
 * @param maxNumber The maximum required number, included
 * @returns The new randomly generated number
 */
function getRandomNumber(minNumber, maxNumber){
    return Math.floor( Math.random() *(maxNumber - minNumber + 1) + minNumber);
}
