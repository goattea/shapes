//@ts-check

import { Shape } from "../shapes/shape.js";

export class Grid {
	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} rows
	 * @param {number} cols
	 */
	constructor(ctx, rows, cols) {
		this.ctx = ctx;
		this.rows = rows;
		this.cols = cols;
		/** @type {Shape[][]} */
		this.grid = [[]];
	}
}
