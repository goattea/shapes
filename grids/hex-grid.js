//@ts-check
import { Hexagon } from "../shapes/hexagon.js";
import { Grid } from "./grid.js";

export class HexGrid extends Grid {
	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} rows
	 * @param {number} cols
	 * @param {Hexagon} hexagon
	 */
	constructor(ctx, rows, cols, hexagon) {
		super(ctx, rows, cols);
		this.shape = hexagon;
		this.#buildGrid();
	}

	#buildGrid() {
		const EDGES = 6;
		const EDGE_LEN = Math.sin(Math.PI / EDGES) * this.shape.r * 2;
		const GRID_Y_SPACE = Math.cos(Math.PI / EDGES) * this.shape.r * 2;
		const GRID_X_SPACE = this.shape.r * 2 - EDGE_LEN * 0.5;
		const GRID_Y_OFFSET = GRID_Y_SPACE * 0.5;

		for (let gy = 1; gy < 1 + this.cols; gy++) {
			this.grid.push([]);
			for (let gx = 1; gx < 1 + this.rows; gx++) {
				const x = gx * GRID_X_SPACE;
				const y = gy * GRID_Y_SPACE + (gx % 2 ? GRID_Y_OFFSET : 0);

				const shape = new Hexagon(this.ctx, x, y, this.shape.r);
				shape.fillColor = this.shape.fillColor;
				shape.strokeColor = this.shape.strokeColor;
				shape.isFilled = this.shape.isFilled;
				shape.isOutlined = this.shape.isOutlined;

				this.grid[gy - 1].push(shape);
			}
		}
	}

	draw() {
		for (const row of this.grid) {
			for (const shape of row) {
				shape.draw();
			}
		}
	}
}
