export default class PijltjesData {
	constructor(Movement){
		console.log('hello world');
		this.Movement = Movement;

		window.addEventListener("keydown", (e) => {
			console.log ('keydown');

			if (e.keyCode == 39){
				this.Movement.move(0);
			}
			if (e.keyCode == 37) {
				this.Movement.move(1);
			}
		});
	}
}