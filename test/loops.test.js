const { expect, test } = require("@jest/globals");
const vowelsAndConsonants = require("../loops");

describe("loops",()=>{
    it("is a function",()=>{
        expect(vowelsAndConsonants).toEqual(vowelsAndConsonants)
    })
    test("the return values are in alphabetical order",()=>{
        expect(vowelsAndConsonants("javascript")).toEqual("jvscrptaai")
    })
    
})