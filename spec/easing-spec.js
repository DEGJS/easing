const easing = require('../src/easing');

describe("Calling the linear function", function() {
    it("should return the expected value", function() {
        const value = easing.linear(1, 1, 5, 10);
        expect(value).toBe(1.5);
    });
});

describe("Calling the easeInOutCubic function", function() {
    it("should return the expected value", function() {
        const value = easing.easeInOutCubic(1, 1, 5, 10);
        expect(value).toBe(1.02);
    });
});

describe("Calling the easeOutCubic function", function() {
    it("should return the expected value", function() {
        const value = easing.easeOutCubic(1, 1, 5, 10);
        expect(value).toBe(2.3549999999999995);
    });
});

describe("Calling the easeInCubic function", function() {
    it("should return the expected value", function() {
        const value = easing.easeInCubic(1, 1, 5, 10);
        expect(value).toBe(1.005);
    });
});