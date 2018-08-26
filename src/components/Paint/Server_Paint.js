const Paint = (io) =>
{
    let colours = ["red", "blue", "green", "purple", "yellow"];

    let usedColours = [];

    io.on('connection', (socket) =>
    {
        let randomColourIndex = Math.floor((Math.random() * colours.length - 1) + 0);

        socket.emit('connected', { colour: colours[randomColourIndex] });

        usedColours.push(colours.splice(randomColourIndex, 1));

        socket.on('clientIsDrawing', (data) =>
        {
            socket.broadcast.emit('otherPlayerIsDrawing', data);
        });
    });
}

module.exports = Paint;