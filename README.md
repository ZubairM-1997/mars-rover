### Mars Rover Project

## The Problem
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.



A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## Input
1) The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.
2) The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover’s position, and 3)3) the second line is a series of instructions telling the rover how to explore the plateau.
4) The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
5) Each rover will be finished sequentially, which means that the second rover won’t start to move until the first one has finished moving.
6) Output: The output for each rover should be its final co-ordinates and heading.

## Thought Process
This is a common Object-Oriented based problem which requires the mechanism of composition instead of inheritance, this is because of the relationship between the Rover and the Grid/Plateau, as in the Rover Class has a Grid Class. I also had to used the fs module to asynchronously read the input.txt file and convert them to the correct types before passing them to the business logic.

## Running the file and tests
1) Clone this repository
2) the the command npm install to install the dependances
3) to run the file, type the command node readInput.js in the terminal
4) to view the tests passing, type the command npm test to view them all

I used jest as the framework for testing purposes
# mars-rover
