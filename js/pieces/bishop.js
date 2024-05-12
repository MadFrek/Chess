import { Piece } from "../piece.js";

export class Bishop extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-Bishop.png`;
        this.element.alt = `${color}-Bishop`;
        this.element.classList.add(this.element.alt);
    }
}