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

const master = new Master();