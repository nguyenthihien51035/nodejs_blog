const Course = require("../models/course")
const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /
    async index(req, res, next) {
        await Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(next);

    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
