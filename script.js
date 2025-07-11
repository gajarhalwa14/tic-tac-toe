function createUser(name, markerType) {
    return {name, markerType};
}

const gameBoard = (function () {
    let array = ['-', '-', '-',
                 '-', '-', '-',
                 '-', '-', '-'
    ];

    let currentMarkerTurn = 'X';
    const isSpotTaken = (index) => array[index] === '-' ? false : true;
    const checkRows = (markerType) => {
        for (let i = 0; i <=6; i += 3) {
            if ((array[i] === array[i+1]) && (array[i+1] === array[i+2]) && (array[i] === markerType)) {
                return true;
            }   
        }
        return false;
    }
    const checkColumns = (markerType) => {
        for (let i = 0; i < 3; i++) {
            if ((array[i] === array[i+3]) && (array[i+3] === array[i+6]) && (array[i] === markerType)) {
                return true;
            }
        }
        return false;
    }

    const checkDiagonals = (markerType) => {
        // Check top to bottom diagonal
        if ((array[0] === array[4]) && (array[4] === array[8]) && (array[0] === markerType)) {
                return true;
        }
        // check other diagonal
        else if ((array[2] === array[4]) && (array[4] === array[6]) && (array[2] === markerType)) {
                return true;
        }
        return false;
    }
    const checkGameWon = (markerType) => {
        if ((checkRows(markerType) || (checkColumns(markerType)) || (checkDiagonals(markerType)))) {
            return true;
        }
        return false;
    }

    const isEverySpotTaken = () => {
        for (let i = 0; i < 9; i++) {
            if (!isSpotTaken(i)) {
                return false;
            }
        }
        return true;
    }

    const checkGameDraw = () => {
        if ((checkGameWon('X')) || (checkGameWon('O'))) {
            return false;
        }
        return true;
    }
    const addMarker = (markerType, index) => array[index] = markerType;
    const getCurrentMarkerTurn = () => currentMarkerTurn;
    const changeCurrentMarkerTurn = () => currentMarkerTurn === 'X' ? currentMarkerTurn = 'O' : currentMarkerTurn = 'X';
    const makeMove = (index) => {
        if ((isSpotTaken(index)) || (index < 0) || (index > 8)) {
            alert("Invalid move!");
            return;
        }
        addMarker(currentMarkerTurn, index);
        printBoard();
        if (checkGameWon(currentMarkerTurn)) {
            console.log(currentMarkerTurn + " won!");
            return;
        }
        changeCurrentMarkerTurn();
        if (isEverySpotTaken()) {
            console.log("Game ends in a draw!");
            return;
        }
    }
    const printBoard = () => console.log(`${array[0]} ${array[1]} ${array[2]}\n${array[3]} ${array[4]} ${array[5]}\n${array[6]} ${array[7]} ${array[8]}\n`)
    return {isSpotTaken, checkGameDraw, checkGameWon, addMarker, makeMove, getCurrentMarkerTurn,
        changeCurrentMarkerTurn, printBoard};
})();

gameBoard.printBoard();
gameBoard.makeMove(1);
gameBoard.makeMove(3);
gameBoard.makeMove(4);
gameBoard.makeMove(8);
gameBoard.makeMove(6);
gameBoard.makeMove(7);
gameBoard.makeMove(5);
gameBoard.makeMove(2);
gameBoard.makeMove(0);





