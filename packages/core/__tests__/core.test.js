'use strict';

it('@ragingsnail/core', () => {
    const { sum } = require('../src/index.js');
    expect(sum(1,2)).toBe(3)
});