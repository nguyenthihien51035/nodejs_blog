const Course = require("../models/course")
const { multipleMongooseToObject } = require('../../util/mongoose');
const course = require("../models/course");
class MeController {

    // [GET] /me/store/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then(course => res.render('me/store-courses', {
                course: multipleMongooseToObject(course)
            }))
            .catch(next)
    }
}
module.exports = new MeController();


