// JScript source code
module("save scope", {
    setup: function () {
        this.foo = "bar";
    },
    teardown: function () {
        deepEqual(this.foo, "bar");
    }
});
test("scope check", function () {
    expect(2);
    deepEqual(this.foo, "bar");
});

