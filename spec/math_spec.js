// tell the test where to find the code
var math = require('../math');

describe("A simple program that does math", function() {
	it("can add two numbers", function() {
		expect(math.add(3, 5)).toBe(8);
	});
});

describe("A simple program that does math", function() {
	it("can subtract two numbers", function() {
		expect(math.subtract(3, 5)).toBe(-2);
	});
});

describe("A simple program that does math", function() {
	it("can multiply two numbers", function() {
		expect(math.multiply(3, 5)).toBe(15);
	});
});

describe("A simple program that does math", function() {
	it("can divide two numbers", function() {
		expect(math.divide(10, 5)).toBe(2);
	});
});