import { Pawn } from "./pieces/pawn.js";
import { Rook } from "./pieces/rook.js";
import { Knight } from "./pieces/knight.js";
import { Bishop } from "./pieces/bishop.js";
import { Queen } from "./pieces/queen.js";
import { King } from "./pieces/king.js";

function initPawns(squares) {
    for (let i = 0; i < 8; i++) {
        new Pawn(squares.get(String.fromCharCode(97 + i) + 7), 'Black');
    }

    for (let i = 0; i < 8; i++) {
        new Pawn(squares.get(String.fromCharCode(97 + i) + 2), 'White');
    }
}

function initRooks(squares) {
    new Rook(squares.get("a1"), 'White');
    new Rook(squares.get("h1"), 'White');
    new Rook(squares.get("a8"), 'Black');
    new Rook(squares.get("h8"), 'Black');
}

function initKnights(squares) {
    new Knight(squares.get("b8"), 'Black');
    new Knight(squares.get("g8"), 'Black');
    new Knight(squares.get("b1"), 'White');
    new Knight(squares.get("g1"), 'White');
}

function initBishops(squares) {
    new Bishop(squares.get("c8"), 'Black');
    new Bishop(squares.get("f8"), 'Black');
    new Bishop(squares.get("c1"), 'White');
    new Bishop(squares.get("f1"), 'White');
}

function initQueens(squares) {
    new Queen(squares.get("d8"), 'Black');
    new Queen(squares.get("d1"), 'White');
}

function initKings(squares) {
    new King(squares.get("e8"), 'Black');
    new King(squares.get("e1"), 'White');
}

function initPiecesToStartPosition(squares) {
    initPawns(squares);
    initRooks(squares);
    initKnights(squares);
    initBishops(squares);
    initQueens(squares);
    initKings(squares);
}

export { initPiecesToStartPosition };