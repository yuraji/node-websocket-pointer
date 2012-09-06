# Node-based Websockets example: pointer

this server js file and index.html is an example for WebSockets. 

Click or tap screen and it will update all screens that opened this page

## How to:

install [Node.js](http://nodejs.org/)

install [Socket.io](http://socket.io/):
	
	npm install socket.io

run

	node server.js
	
visit
	
	http://localhost:1337/index.html
	
or whatever domain you've set up - be sure to update index.html then:

	var socket = io.connect('http://localhost:1337');