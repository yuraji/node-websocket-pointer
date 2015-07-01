# Node-based Websockets example: pointer

[![Book session on Codementor](https://cdn.codementor.io/badges/book_session_github.svg)](https://www.codementor.io/yurio) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/ylinnyk)
[![Donate with Gratipay](https://img.shields.io/gratipay/yuraji.svg)](https://gratipay.com/~yuraji/)

This server js file and index.html are an example for WebSockets. 

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
	
