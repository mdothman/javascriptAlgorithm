const { expect, test } = require("@jest/globals");
const vowelsAndConsonants = require("../loops");

describe("loops",()=>{
    it("is a function",()=>{
        expect(vowelsAndConsonants).toEqual(vowelsAndConsonants)
    })
    test("Returns array of values",()=>{
        expect(vowelsAndConsonants("abc")).toEqual(["a","b","c"])
    })
    test("the return values are in alphabetical order",()=>{
        expect(vowelsAndConsonants("javascript")).toEqual(["a","a","i","j","v","s","c","r","p","t"])
    })
    
})