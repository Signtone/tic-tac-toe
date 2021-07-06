class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null], [null, null, null], [null, null, null]];
        this.progress = 0;
    }

    getCurrentPlayerSymbol() {
        if (this.progress % 2 === 0) {
                return "x";
            } else {
                return "o";
            }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.progress++;
        }
    }

    isFinished() {
        if (this.isDraw() || this.getWinner() !== null) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.matrix[i][0] === this.matrix[i][1] && this.matrix[i][0] === this.matrix[i][2]) {
                return this.matrix[i][0];
            } else if (this.matrix[0][i] === this.matrix[1][i] && this.matrix[0][i] === this.matrix[2][i]) {
                return this.matrix[0][i];
            }
        }
        if ((this.matrix[0][0] === this.matrix[1][1]) && (this.matrix[0][0] === this.matrix[2][2])) {
            return this.matrix[0][0];
        }
        else if ((this.matrix[0][2] === this.matrix[1][1]) && (this.matrix[0][2] === this.matrix[2][0])) {
            return this.matrix[0][2];
        }
        else {
            return null;
        }
    }

    noMoreTurns() {
        if (this.progress === 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if (this.progress === 9 && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

var play = new TicTacToe;
console.log(play);
play.getCurrentPlayerSymbol();
play.nextTurn(0, 1);
console.log(play);
play.getCurrentPlayerSymbol();
console.log(play);
play.nextTurn(2, 1);
console.log(play);
play.getCurrentPlayerSymbol();
console.log(play);
play.nextTurn(2, 2);
console.log(play);

module.exports = TicTacToe;