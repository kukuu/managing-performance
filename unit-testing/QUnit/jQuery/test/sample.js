//Author: Alexander Adu-Sarkodie
//QUnit test - sample.js

test('test name', function () {
    strictEqual(myFunctionUnderTest(), "expected return value");
});


module('my first module', {
    setup: function () {
        // setup code
    },
    teardown: function () {
        // teardown code
    }
});


//Now the basics of adding setup and teardown code are easy, but once you actually start to use them there’s a big issue with scope 
//that you’ll run into. In order to create variables in your setup that are shared with your tests, you’ll have to create them outside of the module function (as global).
//Let’s look at a concrete example using the idea of a user validation test:

var user;

module("my module ", {
	setup: function() {
		user = // code to create a user
	}
);

test("a test", function() {
	// test code on the user object
	// asserts
});