// JScript source code
//15
module("asyncTest");

asyncTest("asyncTest", function() {
	expect(2);
	ok(true);
	setTimeout(function() {
		state = "done";
		ok(true);
		start();
	}, 13);
});


//16
asyncTest("asyncTest", 2, function() {
	ok(true);
	setTimeout(function() {
		state = "done";
		ok(true);
		start();
	}, 13);
});


//17
test("sync", 2, function() {
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 13);
	stop();
	setTimeout(function() {
		ok(true);
		start();
	}, 125);
});


//18
test("test synchronous calls to stop", 2, function() {
	stop();
	setTimeout(function(){
		ok(true, 'first');
		start();
		stop();
		setTimeout(function(){
			ok(true, 'second');
			start();
		}, 150);
	}, 150);
});
}

