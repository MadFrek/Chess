import { Piece } from "../piece.js";

export class Queen extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-Queen.png`;
        this.element.alt = `${color}-Queen`;
        this.element.classList.add(this.element.alt);
    }
}