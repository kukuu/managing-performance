// JScript source code
module("testEnvironment tests");

function makeurl() {
    var testEnv = QUnit.current_testEnvironment;
    var url = testEnv.url || 'http://example.com/search';
    var q = testEnv.q || 'a search test';
    return url + '?q=' + encodeURIComponent(q);
}

test("makeurl working", function () {
    equal(QUnit.current_testEnvironment, this, 'The current testEnvironment is global');
    equal(makeurl(), 'http://example.com/search?q=a%20search%20test', 'makeurl returns a default url if nothing specified in the testEnvironment');
});
