const Course = require("../models/course")
const { multipleMongooseToObject } = require('../../util/mongoose');
const course = require("../models/course");
class MeController {

    // [GET] /me/store/courses
    storeCourses(req, res, next) {
        Course.find()
            .then(course => {
                res.render('me/store-courses', {
                    course: multipleMongooseToObject(course)
                });
            })
            .catch(next);
    }


    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findWithDeleted({ deleted: true })  // chỉ lấy bản ghi đang bị xóa
            .then(courses => {
                res.render('me/trash-store-courses', {
                    course: multipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

}
module.exports = new MeController();


