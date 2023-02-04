//@ts-check

export class Shape {
	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} x
	 * @param {number} y
	 */
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;

		this.isFilled = true;
		this.isOutlined = true;

		this.fillColor = "black";
		this.strokeColor = "black";
	}

	draw() {}
}
