// tell the test where to find the code
var math = require('../math');

describe("A simple program that does math", function() {
	it("can add two numbers", function() {
		expect(math.add(3, 5)).toBe(8);
	});
});