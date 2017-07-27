// JScript source code
var state;

module("setup/teardown test", {
    setup: function () {
        state = true;
        ok(true);
        x = 1;
    },
    teardown: function () {
        ok(true);
        // can introduce and delete globals in setup/teardown
        // without noglobals sounding the alarm
        delete x;
    }
});


//7
test("module with setup/teardown", function () {
    expect(3);
    ok(true);
});
