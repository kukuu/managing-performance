// JScript source code
QUnit.module("assertion helpers");

QUnit.test("QUnit.assert compatibility", function (assert) {
    QUnit.expect(4);

    assert.ok(true, "Calling method on `assert` argument to test() callback");

    // Should also work, although not documented
    QUnit.assert.ok(true, "Calling method on QUnit.assert object");

    // Test compatibility aliases
    QUnit.ok(true, "Calling aliased method in QUnit root object");
    ok(true, "Calling aliased function in global namespace");
});