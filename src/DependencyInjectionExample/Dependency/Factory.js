const {Course} = require("./Course")
class DAO {
    document() {
        return null
    }
    s3(){
        return null
    }
}
class Factory {
    createCourse(){
        const documentClient = new DAO().document();
        const s3 = new DAO().s3()
        return new Course(documentClient, s3);
    }

}

exports.Factory = Factory