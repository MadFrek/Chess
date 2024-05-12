import { Piece } from "../piece.js";

export class King extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-King.png`;
        this.element.alt = `${color}-King`;
        this.element.classList.add(this.element.alt);
    }
}