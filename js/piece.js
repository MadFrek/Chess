export class Piece {
    constructor(square, color) {
        this.element = document.createElement('img');
        this.element.classList.add('Piece');
        this.color = color;
        this.x = square.x;
        this.y = square.y;
        this.element.id = String.fromCharCode(97 + this.y) + (Math.floor(this.x));
        square.element.appendChild(this.element);
        this.element.addEventListener('click', this.allowDrop);
        this.element.addEventListener('dragover', this.allowDrop);
        this.element.addEventListener('dragstart', this.drag)
        this.element.setAttribute("draggable", true);
    }

    allowDrop(ev) {
        console.log(ev + 'allowDrop works');
        ev.preventDefault();
    }
    
    drag(ev) {
        console.log(ev + 'dragstart works');
        const piece = ev.target;
        ev.dataTransfer.setData("text", piece.id);
    }
}