const Rover = require("../rover").Rover
const Grid = require("../rover").Grid

describe("Rover Constructor" , () => {
	test("Should create a Rover Insance", () => {
		let x = 3
		let y = 4
		let symbol = "N"

		let rover = new Rover(x, y, symbol)
		expect(rover).toBeInstanceOf(Rover)
	})

	test("Coordinates should not be anything other than integers", () => {
		let x = "X"
		let y = "8"
		let symbol = "N"

		expect(() => {
			new Rover(x, y, symbol).toThrow(TypeError)
		})

	})
})

describe("Grid Dimensions", () => {
	test("Dimensions should not be float" , () => {
		let x = 2
		let y = 3
		let symbol = "E"

		let robot = new Rover(x, y, symbol)
		let x_lim = 3.7
		let y_lim = 4.6

		expect(() => {
			robot.obtainGridParameters(x_lim, y_lim)
		}).toThrow();
	})

	test("Dimensions should be integers", () => {
		let x = 2
		let y = 3
		let symbol = "E"

		let robot = new Rover(x, y, symbol)
		let x_lim = "E"
		let y_lim = "4"

		expect(() => {
			robot.obtainGridParameters(x_lim, y_lim)
		}).toThrow();
	})
})

describe("Process instructions" , () =>{
	test("Instructions should only contain the letters LRM" ,() => {
		let x = 2
		let y = 3
		let symbol = "N"

		let robot = new Rover(x, y , symbol)
		robot.obtainGridParameters(5, 5)

		let invalidInstructions = "73HDO999382"
		expect(() => {
			robot.instructions(invalidInstructions)
		}).toThrow();
	})

	test("Instructions should be in a string format", () => {
		let x = 2
		let y = 3
		let symbol = "N"

		let robot = new Rover(x, y , symbol)
		robot.obtainGridParameters(5, 5)

		let invalidInstructions = [1, 2, 3, "N"]
		expect(() => {
			robot.instructions(invalidInstructions)
		}).toThrow();

	})
})