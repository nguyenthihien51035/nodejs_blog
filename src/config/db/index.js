const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect:', error.message);
    }
}


module.exports = { connect }