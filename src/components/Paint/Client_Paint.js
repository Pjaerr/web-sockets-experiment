import { fillRect } from '../../util/canvas.js';

import { mousePos, mouseIsClicked } from '../../util/input.js';

import { socket } from '../../../client.js';

let colour = "red";

socket.on('connected', (data) =>
{
    colour = data.colour;
});

socket.on('otherPlayerIsDrawing', (data) =>
{
    fillRect(data.mousePos, { x: 10, y: 10 }, data.colour);
});

const draw = () =>
{
    if (mouseIsClicked)
    {
        fillRect(mousePos, { x: 10, y: 10 }, colour);

        socket.emit('clientIsDrawing', { mousePos, colour });
    }
}

export { draw };