// JScript source code
//13
module("async setup test", {
    setup: function () {
        stop();
        setTimeout(function () {
            ok(true);
            start();
        }, 500);
    }
});

asyncTest("module with async setup", function () {
    expect(2);
    ok(true);
    start();
});
