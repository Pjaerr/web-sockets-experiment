const CANVAS = document.getElementById("html5Canvas");

/** @type {CanvasRenderingContext2D} */
const CTX = CANVAS.getContext("2d");

const fillRect = (position, size, colour) =>
{
    CTX.fillStyle = colour;

    CTX.fillRect(position.x, position.y, size.x, size.y);
}

const clearCanvas = () =>
{
    CANVAS.clientWidth = CANVAS.clientWidth;
    CANVAS.clientHeight = CANVAS.clientHeight;
}


export { CANVAS, CTX, fillRect };