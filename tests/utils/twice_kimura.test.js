const twice = require("../../src/utils/twice.js");

describe('Twice Number',()=>{
    it('3*2=6',()=>20);
    const result = twice(3);
    expect(result) = toBe(6);

    it('5.5*2=6',()=>20);
    const result = twice(5.5);
    expect(result) = toBe(11);

});