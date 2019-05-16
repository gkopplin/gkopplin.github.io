class Line {
    constructor ({limit, posX, posY, ctx}) {
        this.limit = limit;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
    }

    update() {
        if (this.posY + 8 < this.limit) {
            this.posX -= 8;
        }
        if (this.posY + 8 < this.limit) {
            this.posY += 8;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - 120, this.posY + 120);
        this.ctx.lineTo(this.posX, this.posY + 120);
        this.ctx.lineTo(this.posX + 120, this.posY);
        this.ctx.lineTo(this.posX, this.posY);

        this.ctx.stroke();
        this.ctx.strokeStyle = "#4d4d4d";
        this.ctx.fillStyle = "#4d4d4d";

        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Line;