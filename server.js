
var port = 1337; // <-- you can edit port



var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

app.listen( port );

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.sockets.on('connection', function (socket) {
		
	socket.on('clickCoords', function(data) {
		console.log( 'FROM CLIENT:', data );
		
		// socket.emit('drawCoords', data );
		io.sockets.emit('drawCoords', data );
	});
	
	socket.on('click2Coords', function(data) {
		console.log( 'FROM CLIENT:', data );
		
		// socket.emit('drawCoords', data );
		io.sockets.emit('draw2Coords', data );
	});
	
});





// update all clients:
// http://stackoverflow.com/questions/7352164/update-all-clients-using-socket-io
// 
// It's not actually sending an update to the other clients at all, instead it's just emitting to the client that just connected (which is why you see the update when you first load)
// 
// // socket is the *current* socket of the client that just connected
// socket.emit('users_count', clients); 
// Instead, you want to emit to all sockets
// 
// io.sockets.emit('users_count', clients);
// Alternatively, you can use the broadcast function:
// 
// socket.broadcast.emit('users_count', clients);
// Broadcasting means sending a message to everyone else except for the socket that starts it.





