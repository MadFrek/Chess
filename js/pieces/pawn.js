import { Piece } from "../piece.js";

export class Pawn extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-Pawn.png`;
        this.element.alt = `${color}-Pawn`;
        this.element.classList.add(this.element.alt);
    }
}