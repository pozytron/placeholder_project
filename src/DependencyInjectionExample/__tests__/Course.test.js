const {Course} = require("../Dependency/Course")

const d = jest.fn();
const s = jest.fn();

describe("Course class ",()=>{
    let course;
    beforeEach(()=>{
       course = new Course(d,s);
    })

    it("should create empty Course",()=>{
        course = new Course();
        console.log(course)
        expect(course).toEqual( {"documentClient": null, "s3": null})
    })
    it("should return courseByID",()=>{
        expect(course.courseById(1)).toEqual("DOC:1")
    })
    it("should add lesson",()=>{
        expect(course.addLesson(1,{})).toEqual(true)
    })

})