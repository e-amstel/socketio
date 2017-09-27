export default class Movement {
    constructor(x,y){
		this.props = {
			x: x,
			y: y
		}
    }

    move(dir) { //bewegen aangeroepen door class1
        if (dir == 0){
        	this.props.x = this.props.x + 10; //rechts
        }
        if (dir == 1){
        	this.props.x = this.props.x - 10; //links
		}
    }

    getLocation() {
        return {
			x: this.props.x,
			y: this.props.y
		}; //object met x en y als properties
    }
}