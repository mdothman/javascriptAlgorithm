const { test, expect } = require("@jest/globals")
const arithmetic = require("../arithmetic")

describe("Arithmetic",()=>{
    it("Has area function",()=>{
        const Area = arithmetic.getArea
        expect(Area())
        
    })
    it("Has perimeter function",()=>{
        const Perimeter = arithmetic.getPerimeter
        expect(Perimeter())
    })
    test("Area function returns length times width",()=>{
        const Area = arithmetic.getArea
        expect(Area(4,5)).toEqual(20)
    })
    test("Perimeter function retrurns length(2)+width(2)",()=>{
        const Perimeter = arithmetic.getPerimeter
        expect(Perimeter(4,5)).toEqual(18)
    })
    
})
