// Express initializes app to be a function handler
// that you can supply to an HTTP server.
var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 3000
// Initialize a new instance of socket.io by passing
// the http (the HTTP server) object.


// We define a route handler / that gets called when
// we hit our website home.
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');    // This code servers the index.html
});


 



http.listen(port, function(){                     // Make the http server listen on port 3000.
  console.log('listening on *: ' + port);
});

// http.listen(process.env.PORT, function(){                     // Make the http server listen on port set for environment.
//     console.log('listening on *:' + process.env.PORT);
//   });