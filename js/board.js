import { Square } from "./square.js";
import * as Pieces from "./pieces.js";

class Board {
    constructor() {
        this.element = document.createElement('div');
        this.element.classList.add("board");
        document.querySelector(".container").appendChild(this.element);
        this.addSquares();
    }

    addSquares() {
        this.squares = new Map();

        for (let row = 8; row > 0; row--) {
            for (let column = 0; column < 8; column++) {
                this.squares.set(String.fromCharCode(97 + column) + row, new Square(this, row, column));
            }
        }
    }
    
    startNewGame() {
        Pieces.initPiecesToStartPosition(this.squares);
    }
}

export { Board };