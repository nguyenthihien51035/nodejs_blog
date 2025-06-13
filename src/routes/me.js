const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

//  [GET] /news/noidungbatky
router.get('/store/courses', meController.storeCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
