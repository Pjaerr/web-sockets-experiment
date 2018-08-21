//Import Dependencies
const express = require('express');

const app = express();

const http = require('http').Server(app);

const io = require('socket.io')(http);

const path = require('path');

app.get('/', (req, res) =>
{
    app.use(express.static(path.join(__dirname, '/build')));
    res.sendFile(path.join(__dirname + '/build' + '/index.html'));
});

io.on('connection', socket =>
{
    console.log('a user connected');

    socket.on('disconnect', () =>
    {
        console.log('user disconnected');
    });
});

http.listen(3030, () => console.log("Server listening on port 3030"));