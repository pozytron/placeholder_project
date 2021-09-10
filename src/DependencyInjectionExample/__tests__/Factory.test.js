const {Factory} = require("../Dependency/Factory");

describe("factory function generates objects that", () => {
    it("should create new Factory", () => {
        expect(new Factory()).toEqual({})
    })
    it("should create new Course", () => {
        const expected = {
            "documentClient": null,
            "s3": null,
        }

        expect(new Factory().createCourse()).toEqual(expected)
    })


})