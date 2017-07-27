// JScript source code
module("testEnvironment with makeurl settings", {
    url: 'http://google.com/',
    q: 'another_search_test'
});
test("makeurl working with settings from testEnvironment", function () {
    equal(makeurl(), 'http://google.com/?q=another_search_test', 'rather than passing arguments, we use test metadata to from the url');
});
