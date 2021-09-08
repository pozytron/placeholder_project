const {Stack} = require("../src/Stack")
describe("My Stack", function() {
    let stack;
    beforeEach(()=>{
        stack = new Stack();
        // console.log("WEEEEE!!!!!!!!!!!!!!!!")
    })
    it("is created empty", function() {
        const expected = {}
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual(expected);
    })
    it("is created with 🥑", function() {
        const expected = {
            "0": "🥑"
        }
        stack.push(`🥑`)
        expect(stack.top).toBe(0);
        expect(stack.items).toEqual(expected);
    })
    it("can push to the top", function() {
        const expected = {
            "0": "🥑",
            "1":`🐟`
        }
        stack.push("🥑")
        stack.push(`🐟`)
        console.log(stack)
        expect(stack.top).toBe(1);
        expect(stack.items).toEqual(expected);
    })
    it("can pop off", function() {
        stack.push("🥑")
        stack.push(`🐟`)
        stack.push(`🐗`)

        const popValue = stack.pop()
        console.log(stack, popValue)
        expect(stack.pop()).toBe(`🐗`);
        expect(stack.top).toEqual(1);
    })
})
