export class Square {
    constructor(board, x, y) {
        this.element = document.createElement('div');
        this.x = x;
        this.y = y;
        this.addSquareToBoard(board);
        this.element.addEventListener('drop', this.drop);
    }

    addSquareToBoard(board) {
        this.setColorToSquare();
        this.element.id = String.fromCharCode(97 + this.y) + (Math.floor(this.x));
        board.element.appendChild(this.element);
    }
    
    setColorToSquare() {
        if ((this.x + this.y) % 2 == 0) {
            this.element.classList.add('square', 'White');
            this.color = "White";
        } else {
            this.element.classList.add('square', 'Black');
            this.color = "Black";
        }
    }

    drop(ev) {
        console.log(ev + 'drop works');
    }
}
