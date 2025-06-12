const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        slug: { type: String, slug: 'name', unique: true },
        videoId: { type: String, unique: true },
    },
    {
        timestamps: true
    }
);

// add plugin
Course.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('courses', Course);