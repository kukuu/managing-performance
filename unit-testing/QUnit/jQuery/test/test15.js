// JScript source code
module("simple testEnvironment setup", {
    foo: "bar",
    bugid: "#5311" // example of meta-data
});
test("scope check", function () {
    deepEqual(this.foo, "bar");
});

//21
test("modify testEnvironment", function () {
    expect(0);
    this.foo = "hamster";
});

//22
test("testEnvironment reset for next test", function () {
    deepEqual(this.foo, "bar");
});

