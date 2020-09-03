export default class Point {
  ctx: CanvasRenderingContext2D;

  x: number;

  y: number;

  scale: number;

  color: string;

  constructor(
    ctx: CanvasRenderingContext2D,
    x = 0,
    y = 0,
    scale = 10,
    color = '#fff',
  ) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.color = color;
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.scale, this.scale);
  }
}
