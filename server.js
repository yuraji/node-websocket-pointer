var port = 1337;


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
		// console.log( 'FROM CLIENT:', data );
		
		// socket.emit('drawCoords', data ); // this will only update self
		io.sockets.emit('drawCoords', data );
	});
	
	socket.on('click2Coords', function(data) {
		io.sockets.emit('draw2Coords', data );
	});
	
});



