const letAndConst  =  require("../letAndConst");

describe("let and const will return the area of a circle and the perimeter ",()=>{
    test(" I can put in a number",()=>{
       expect(letAndConst(2)).toEqual(12.566370614359172)
    })
})