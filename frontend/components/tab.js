class Tab {
    constructor ({limit, posX, posY, ctx, color}) {
        this.limit = limit;
        this.posX = posX;
        this.posY = posY;
        this.ctx = ctx;
        this.color = color;
    }

    update() {
        if (this.posY + 8 < this.limit) {
            this.posX -= 8;
        } else {
            this.done = true;
        }
        if (this.posY + 8 < this.limit) {
            this.posY += 8;
        } else {
            this.done = true;
        }
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - 130, this.posY + 130);
        this.ctx.lineTo(this.posX, this.posY + 130);
        this.ctx.lineTo(this.posX + 130, this.posY);
        this.ctx.lineTo(this.posX, this.posY);

        if (this.posY < 100) this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.strokeStyle = this.color;
        this.ctx.fillStyle = this.color;

        this.ctx.fill();
        this.ctx.closePath();
    }

    reverseUpdate() {
        if (this.posY - 8 > this.limit) {
            this.posX += 8;
        } else {
            this.done = true;
        }
        if (this.posY - 8 > this.limit) {
            this.posY -= 8;
        } else {
            this.done = true;
        }
    }

    reverseDraw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.posX, this.posY);
        this.ctx.lineTo(this.posX - 10, this.posY + 10);
        this.ctx.lineTo(this.posX + 130, this.posY + 10);
        this.ctx.lineTo(this.posX + 140, this.posY);
        this.ctx.lineTo(this.posX, this.posY);

        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.strokeStyle = '#f5f5f5';
        this.ctx.fillStyle = '#f5f5f5';

        this.ctx.fill();
        this.ctx.closePath();
    }
}

export default Tab;