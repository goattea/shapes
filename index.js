//@ts-check

import { HexGrid } from "./grids/hex-grid.js";
import { Hexagon } from "./shapes/hexagon.js";

/** @type {HTMLCanvasElement} */ //@ts-ignore
const canvas = document.getElementById("drawing-canvas");
/** @type {CanvasRenderingContext2D} */ //@ts-ignore
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// resize canvas on resize event
addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

let hex = new Hexagon(ctx, 0, 0, 12);
hex.isFilled = false;

let hexGrid = new HexGrid(ctx, 100, 100, hex);
hexGrid.draw();
