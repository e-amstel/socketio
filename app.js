var io = require('socket.io')(8080);

io.on('connection', function (socket) {   
  socket.broadcast.emit('user connected');

  // socket.on("spelen", function (speler) { //we recieved spelen
  //   console.log(speler);
  //   console.log("speler");
  // });

  socket.on('message', function (msg) {
    console.log(msg);  
    socket.emit('bericht', msg);
    
   });
  socket.on('disconnect', function () {
      console.log("user disconnected")
   });
  console.log("connected");        
});

console.log("server start "); 