const Course = require("../models/course")
const { mongooseToObject } = require('../../util/mongoose')
class CoursesController {

    // [GET] /sourses/:slug
    show(req, res, next) {

        Course.findOne({ slug: req.params.slug })
            .then(course =>
                res.render('courses/show', { course: mongooseToObject(course) })
            )
            .catch(next)
    }

    // [GET] /sourses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST] /sourses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }
}
module.exports = new CoursesController();


