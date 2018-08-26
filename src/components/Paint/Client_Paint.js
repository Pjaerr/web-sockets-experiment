/* Import the ability to draw a rectangle from the canvas util file. */
import { fillRect } from '../../util/canvas.js';

/* Import mouse input data from the input util file. */
import { mousePos, mouseIsClicked } from '../../util/input.js';

/* Import client socket object to emit and receive events. */
import { socket } from '../../../client.js';

let colour = "red";

/** When this client connects, store the colour given by the server and if
 * there is already drawing on the canvas, restore that from the server.*/
socket.on('connected', (data) =>
{
    colour = data.colour;

    restoreState(data.state);
});

/** Loops through every rectangle that has already been drawn onto the canvas
 * before this client connected and re-draws it using its position and colour
 * data.*/
const restoreState = (state) =>
{
    for (let i = 0; i < state.length; i++)
    {
        for (let j = 0; j < state[i].positions.length; j++)
        {
            fillRect(state[i].positions[j], { x: 10, y: 10 }, state[i].colour);
        }
    }
}

/** When another client draws something, draw it locally. */
socket.on('otherPlayerIsDrawing', (data) =>
{
    fillRect(data.mousePos, { x: 10, y: 10 }, data.colour);
});

/** Draw a rectangle on the canvas at the current mouse position if the mouse is currently
 * being clicked. Also send the data for the rectangle to the server to be broadcast to all
 * other clients so they can draw it locally.*/
const draw = () =>
{
    if (mouseIsClicked)
    {
        fillRect(mousePos, { x: 10, y: 10 }, colour);

        socket.emit('clientIsDrawing', { mousePos, colour });
    }
}

export { draw };