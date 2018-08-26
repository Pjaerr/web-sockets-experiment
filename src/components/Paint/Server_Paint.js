let state = []; //The position and colour of every rectangle that has been drawn.

/** Whenever a client draws a rectangle, store it into the state array. Checking if
 * its colour already exists, and if not, creating it.*/
const storeState = (data) =>
{
    let colourAlreadyExists = false;

    for (let i = 0; i < state.length; i++)
    {
        if (state[i].colour === data.colour)
        {
            state[i].positions.push(data.mousePos);

            colourAlreadyExists = true;
            break;
        }
        else
        {
            colourAlreadyExists = false;
        }
    }

    if (!colourAlreadyExists)
    {
        state.push({ colour: data.colour, positions: [data.mousePos] });
    }
}

/** The serverside component that is exported, give every Client_Paint component a random
 * colour when they have connected and also listen for when somebody draws, broadcasting it
 * to every other client so that they can draw the same thing locally.*/
const Paint = (io) =>
{
    let colours = ["red", "blue", "green", "purple", "yellow"];

    io.on('connection', (socket) =>
    {
        let randomColourIndex = Math.floor((Math.random() * colours.length - 1) + 0);

        socket.emit('connected', { colour: colours[randomColourIndex], state });

        socket.on('clientIsDrawing', (data) =>
        {
            storeState(data);

            socket.broadcast.emit('otherPlayerIsDrawing', data);
        });
    });
}

module.exports = Paint;