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

    //Do something when a user connects.
io.on('connection ', socket => console.log('A User Has Connected!'));
});





http.listen(3000, () => console.log("Server listening on port 3000"));