import React from 'react';
import Line from './line';
import Tab from './tab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.animation = this.animation.bind(this);
        this.checkMousePos = this.checkMousePos.bind(this);
        this.colors = ["#7D7D7D", "#808080", "#838382", "#868686", "#858685"];
        this.state = {mouseX: 0, 
                      mouseY: 0,
                      mouseColor: "#000000"};
    }

    checkMousePos(e) {
        this.setState({ mouseX: e.clientX, mouseY: e.clientY });

        const imgData = this.ctx.getImageData(this.state.mouseX, this.state.mouseY, 1, 1).data;
        const hex = "#" + (this.rgbToHex(imgData[0], imgData[1], imgData[2]));
        this.setState({mouseColor: hex});
    }

    rgbToHex(r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    }


    componentDidMount(){
        const canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.line = new Line({ posX: 100, ctx: this.ctx });
        this.tabs = [new Tab({ limit: 100, posX: 540, posY: -250, ctx: this.ctx, color: this.colors[0]}),
            new Tab({ limit: 50, posX: 630, posY: -200, ctx: this.ctx, color: this.colors[1] }),
            new Tab({ limit: 220, posX: 720, posY: -150, ctx: this.ctx, color: this.colors[2] }),
            new Tab({ limit: 140, posX: 960, posY: -250, ctx: this.ctx, color: this.colors[3] }),
            new Tab({ limit: 110, posX: 1000, posY: -150, ctx: this.ctx, color: this.colors[4] })];

        window.requestAnimationFrame(this.animation);
        canvas.onmousemove = this.checkMousePos;
    }

    animation() {
        this.tabs.forEach(tab => {
            tab.update();
            tab.draw();
        });

        if (this.tabs.every(tab => tab.done)) {
            this.line.update();
            this.line.draw();
        }
        if (!this.line.done) {
            window.requestAnimationFrame(this.animation);
        }
    }

    render() {

        return (
            <>
            <canvas width="900" height="400" id="canvas"></canvas>
                <h1>{this.state.mouseX}<br></br>{this.state.mouseY}<br></br>{this.state.mouseColor}</h1>
            </>
        );
    }
};


export default Header;