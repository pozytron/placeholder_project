const {Stack} = require("../src/Stack")
describe("My Stack", function() {

    let stack;

    beforeEach(()=>{
        stack = new Stack();
        // console.log("WEEEEE!!!!!!!!!!!!!!!!")
    })

    it("is created empty", function() {
        stack.push(`🥑`)
        expect(stack.top).toBe(0);
        expect(stack.items).toEqual({});
    })
    it("can push to the top", function() {

    })
    // it("can pop off", function() {
    //
    // })
})
