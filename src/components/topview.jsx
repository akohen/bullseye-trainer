import React from 'react';
const WIDTH = 300
const HEIGHT = 300
const SCALE = 5

class TopView extends React.Component {

    componentWillUpdate(props) {
        this.updateCanvas(props);
    }

    updateCanvas(props) {
        const ctx = this.refs.canvas.getContext('2d')
        ctx.clearRect(0, 0, WIDTH, HEIGHT)

        if(props===undefined || props.positions.difference===undefined) return null
        const A = props.positions.A
        const B = props.positions.B
        const diff = props.positions.difference

        ctx.font = '14px monospace'

        // Drawing bullseye
        ctx.strokeStyle = "green"
        ctx.fillStyle = "green"
        ctx.beginPath()
        ctx.arc(WIDTH/2, HEIGHT/2,1,0,2*Math.PI)
        ctx.stroke()
        ctx.fillText('Bullseye', WIDTH/2, HEIGHT/2 -3);

        // Drawing player
        let x = A.lon * SCALE + WIDTH/2
        let y = -A.lat * SCALE + HEIGHT/2
        ctx.strokeStyle = "blue"
        ctx.fillStyle = "blue"
        ctx.beginPath()
        ctx.arc(x, y,5,0,2*Math.PI)
        ctx.stroke()
        ctx.fillText('You', x, y-4);

        // Drawing target
        x = B.lon * SCALE + WIDTH/2
        y = -B.lat * SCALE + HEIGHT/2
        ctx.strokeStyle = "red"
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(x, y,5,0,2*Math.PI)
        ctx.stroke()
        ctx.fillText('Target', x, y-4)

        // Drawing guess
        x+= diff.lon * SCALE
        y-= diff.lat * SCALE
        ctx.strokeStyle = "red"
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(x, y,5,0,2*Math.PI)
        ctx.stroke()
    }
    render() {
        return (
            <canvas ref="canvas" width={WIDTH} height={HEIGHT}/>
        );
    }
}

export default TopView