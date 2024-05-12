import { Piece } from "../piece.js";

export class Knight extends Piece {
    constructor(square, color) {
        super(square, color);
        this.element.src = `../img/${color}-Knight.png`;
        this.element.alt = `${color}-Knight`;
        this.element.classList.add(this.element.alt);
    }
}