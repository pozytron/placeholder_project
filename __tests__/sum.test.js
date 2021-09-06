const {sum} = require("../app.js");


describe("while two int passed",()=>{
    it("should return sum",()=>{
        expect(sum(1,1)).toBe(2)
    })
})