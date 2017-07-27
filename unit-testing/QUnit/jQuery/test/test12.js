// JScript source code
module("async teardown test", {
    teardown: function () {
        stop();
        setTimeout(function () {
            ok(true);
            start();
        }, 500);
    }
});

asyncTest("module with async teardown", function () {
    expect(2);
    ok(true);
    start();
});
