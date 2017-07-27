// JScript source code
var orgDate;

module("Date test", {
    setup: function () {
        orgDate = Date;
        Date = function () {
            ok(false, 'QUnit should internally be independant from Date-related manipulation and testing');
            return new orgDate();
        };
    },
    teardown: function () {
        Date = orgDate;
    }
});

test("sample test for Date test", function () {
    expect(1);
    ok(true);
});