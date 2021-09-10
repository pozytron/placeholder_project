
class Course {
    constructor(documentClient=null,s3=null){
        this.documentClient = documentClient;
        this.s3 = s3;
    }
    courseById(courseId){
        // return this.documentClient.get({courseId})
        return `DOC:${courseId}`
    }
    addLesson(courseId,component){
        return true
    }
}

exports.Course = Course