
// recupero il parent all'interno del quale voglio inserire i miei elementi
const mainContentEl = document.querySelector('main section.main-content');

const startButtonEl = document.querySelector('button#button-start');

const difficultySelectorEl = document.querySelector('select#select-difficulty');

startButtonEl.addEventListener('click', function(){
    generateNewGame(mainContentEl, difficultySelectorEl);
});


// ? ------ Functions ------ ?

function generateNewGame(wrapperElement, levelSelector){
    wrapperElement.innerHTML = '';

    const level = parseInt(levelSelector.value);
    let cellsNo;

    switch (level){
        case 0:
        default:
            cellsNo = 100;
            break;
        case 1:
            cellsNo = 81;
            break;
        case 2:
            cellsNo = 49;
            break;
    }

    let cellsPerRow = Math.sqrt(cellsNo);

    for (let i = 1 ; i <= cellsNo ; i++){
        const currentSquare = getNewSquare();
        const squareContent = i;

        currentSquare.innerHTML += `<span> ${squareContent} </span>`;

        const cellSize = `calc(100% / ${cellsPerRow})`;
        currentSquare.style.width = cellSize;
        currentSquare.style.height= cellSize;

        if ( squareContent % 2 === 0){
            currentSquare.classList.add('bg-blue');
        } else {
            currentSquare.classList.add('bg-red');
        }

        currentSquare.addEventListener('click', function(){
            currentSquare.classList.toggle('clicked');
            console.log(squareContent);
        });

        wrapperElement.appendChild(currentSquare);
    }
}


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
