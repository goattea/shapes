//@ts-check

import { Shape } from "./shape.js";

export class Hexagon extends Shape {
	/**
	 * @param {CanvasRenderingContext2D} ctx
	 * @param {number} x
	 * @param {number} y
	 * @param {number} r
	 */
	constructor(ctx, x, y, r) {
		super(ctx, x, y);
		this.a = (2 * Math.PI) / 6;
		this.r = r;
	}

	draw() {
		this.ctx.save();

		this.ctx.fillStyle = this.fillColor;
		this.ctx.strokeStyle = this.strokeColor;

		this.ctx.beginPath();
		for (var i = 0; i < 6; i++) {
			this.ctx.lineTo(
				this.x + this.r * Math.cos(this.a * i),
				this.y + this.r * Math.sin(this.a * i)
			);
		}
		this.ctx.closePath();
		if (this.isOutlined) this.ctx.stroke();
		if (this.isFilled) this.ctx.fill();
		this.ctx.restore();
	}
}
