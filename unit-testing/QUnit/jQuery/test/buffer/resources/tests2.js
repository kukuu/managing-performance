
//Qunit JS test for qu-2.html
$(document).ready(function () {

    test("a basic test example", function () {
        ok("!=0", "this test is fine");
        //ok(true, "this test is fine");
        var value = "Enter your password";
        equal(value, "Enter your password", "We expect value to be: Enter your password");
    });

    module("Module A");

    test("first test within module", function () {
        ok(true, "all pass");
    });

    test("second test within module", function () {
        ok(true, "all pass");
    });

    module("Module B");

    test("some other test", function () {
        expect(2);
        equal(false, false, "failing test");
        equal(true, true, "passing test");
    });

});