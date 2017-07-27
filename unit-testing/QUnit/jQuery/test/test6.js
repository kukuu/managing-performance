// JScript source code
//5
module("setup test", {
    setup: function () {
        ok(true);
    }
});

test("module with setup", function () {
    expect(2);
    ok(true);
});

//6
test("module with setup, expect in test call", 2, function () {
    ok(true);
});
