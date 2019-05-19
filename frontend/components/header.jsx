import React from 'react';
import Line from './line';
import Tab from './tab';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.animation = this.animation.bind(this);
    }

    componentDidMount(){
        const canvas = document.getElementsByTagName('canvas')[0];
        this.ctx = canvas.getContext('2d');
        this.line = new Line({ posX: 100, ctx: this.ctx });
        this.tabs = [new Tab({ limit: 100, posX: 540, posY: -250, ctx: this.ctx, color: "#7D7D7D"}),
            new Tab({ limit: 50, posX: 630, posY: -200, ctx: this.ctx, color: "#808080" }),
            new Tab({ limit: 220, posX: 720, posY: -150, ctx: this.ctx, color: "#838382" }),
            new Tab({ limit: 140, posX: 960, posY: -250, ctx: this.ctx, color: "#868686"}),
            new Tab({ limit: 110, posX: 1000, posY: -150, ctx: this.ctx, color: "#858685" })];

        window.requestAnimationFrame(this.animation);
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
            <canvas width="900" height="400"></canvas>
        );
    }
};


export default Header;