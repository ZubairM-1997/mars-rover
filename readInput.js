const fs = require("fs")
const Rover = require("./rover.js").Rover

const readFile = () => fs.readFile("./input.txt", "utf8", function(err, data){
	if(err){
		throw err
	}

	let contents = data
	processFile(contents)
})

function processFile(contents){
	let result = contents.split("\n").filter(item => item.length > 0);

	let dimensions = result[0].split(" ")
	let x_limit = parseInt(dimensions[0], 10)
	let y_limit = parseInt(dimensions[1], 10)


	let firstRoverInfo = result[1].split(" ")
	let x_first = parseInt(firstRoverInfo[0], 10)
	let y_first = parseInt(firstRoverInfo[1], 10)
	let first_symbol = firstRoverInfo[2]

	let firstRover = new Rover(x_first, y_first, first_symbol)
	firstRover.obtainGridParameters(x_limit, y_limit)
	let firstRoverInstructions = result[2]
	firstRover.instructions(firstRoverInstructions)

	let secondRoverInfo = result[3].split(" ")
	let x_second = parseInt(secondRoverInfo[0], 10)
	let y_second = parseInt(secondRoverInfo[1], 10)
	let second_symbol = secondRoverInfo[2]

	let secondRover = new Rover(x_second, y_second, second_symbol)
	secondRover.obtainGridParameters(x_limit, y_limit)
	let secondRoverInstructions = result[4]
	secondRover.instructions(secondRoverInstructions)


}

readFile();