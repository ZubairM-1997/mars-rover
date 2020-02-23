class Grid {
	constructor(x_lim, y_lim){
		this.x_lim = x_lim
		this.y_lim = y_lim
	}
}

class Rover {
	constructor(x, y, direction){
		if (typeof x !== "number" || typeof y !== "number"){
			throw TypeError("Coordinates should be integers")
		}

		this.x = x
		this.y = y

		switch(direction){
			case "N":
				this.direction = 0
				break;
			case "E":
				this.direction = 90
				break;
			case "W":
				this.direction = 270;
				break;
			case "S":
				this.direction = 180
				break;
		}
	}

	obtainGridParameters(x_limit, y_limit){
		if (x_limit % 1 !== 0 || y_limit % 1 !== 0){
			throw new Error("Coordinates should not be float")
		}
		if (typeof x_limit !== "number" || typeof y_limit !== "number"){
			throw TypeError("Grid coordinates should be integers")
		}



		this.plateauDimensions = new Grid(x_limit, y_limit)
	}

	instructions(str){
		let regex = /^[LRM]+$/

		if (regex.test(str) === false){
			throw Error("Invalid set of instructions were entered")
		}

		if(typeof str !== "string"){
			throw TypeError("The set of instructions must be in a string format")
		}

		for(let i = 0; i < str.length; i++){
			if(str[i] !== "M"){
				this.rotate(str[i])
			} else {
				this.move()

			}
		}

		this.reportStatus();


	}

	rotate(symbol){
		switch(symbol){
			case "L":
				this.direction -=90;
				break;

			case "R":
				this.direction += 90;
				break;

			default:
				return Error("Invalid instruction")
		}

	}

	move(){

		if (this.x <= this.plateauDimensions.x_lim || this.y <= this.plateauDimensions.y_lim){
				this.x = this.x + Math.round(Math.sin(this.direction * (Math.PI / 180)))
				this.y = this.y + Math.round(Math.cos(this.direction * (Math.PI / 180)))
		}else{
			this.x = this.plateauDimensions.x_lim
			this.y = this.plateauDimensions.y_lim
		}

	}

	reportStatus(){
		let dirSymbol = null;
		this.direction = this.direction % 360
		if (this.direction < 0){
			this.direction = 360 + this.direction
		}

		switch(this.direction){
			case 0:
				dirSymbol = "N"
				break;

			case 90:
				dirSymbol = "E"
				break;

			case 180:
				dirSymbol = "S"
				break;

			case 270:
				dirSymbol = "W"
				break;

		}

		console.log(`The final location of the rover is ${this.x}, ${this.y}, ${dirSymbol}`)

	}


}

module.exports = {Rover, Grid}