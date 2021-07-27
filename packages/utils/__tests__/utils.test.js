'use strict';
test('@ragingsnail/utils', () => {
    const { isObject } = require('../src/index.js');
    expect(isObject('str')).toBe(false)
});