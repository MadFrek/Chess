import { Piece } from "../piece.js";

export class Rook extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-Rook.png`;
        this.element.alt = `${color}-Rook`;
        this.element.classList.add(this.element.alt);
    }
}