import Movement from './movement.es6';
import PijltjesData from './pijltjesdata.es6';
import Draw from './draw.es6';

class Master {
	constructor() {
		this.movement = new Movement(200, 200);
		this.arrows = new PijltjesData(this.movement);
		this.draw = new Draw(this.movement, document.querySelector('#stage'));

		this.loop();
	}

	loop() {
		this.draw.Draw();

		window.requestAnimationFrame(() => {
			this.loop();
		});
	}
}

	var socket = io('http://145.49.10.13:8080');
	socket.on('connect', function () {

	  const master = new Master();	
	  var user = {
		id: socket.id,
		xpos: master.movement.props.x
	  }
	 // socket.send(user);

	  document.onkeydown = function(){
		  if (user.id == socket.id){
		  user.xpos = master.movement.props.x;
		  socket.send("esther: " + user.xpos); //bij indrukken key wordt de locatie geupdate en verstuurd
		//   socket.emit('spelen', user);			  
		  }
		};

		

		socket.on('bericht', function(msg){
			console.log("jorian" +  msg);
		});

		// if (newUser != user.id)	{
		// 	const master = new Master();	
			
		// }	
	});



function sendMessage(message)
{
	socket.send(message);
}
