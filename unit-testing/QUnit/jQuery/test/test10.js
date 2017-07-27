// JScript source code
//10
module("teardown and stop", {
    teardown: function () {
        equal(state, "done", "Test teardown.");
    }
});

test("teardown must be called after test ended", function () {
    expect(1);
    stop();
    setTimeout(function () {
        state = "done";
        start();
    }, 13);
});

//11
test("parameter passed to stop increments semaphore n times", function () {
    expect(1);
    stop(3);
    setTimeout(function () {
        state = "not enough starts";
        start(), start();
    }, 13);
    setTimeout(function () {
        state = "done";
        start();
    }, 15);
});


//12
test("parameter passed to start decrements semaphore n times", function () {
    expect(1);
    stop(), stop(), stop();
    setTimeout(function () {
        state = "done";
        start(3);
    }, 18);
});
