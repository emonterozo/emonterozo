const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSchema = new Schema({
    school_name: String,
    school_address: String,
    degree: String,
    inclusive_date: String
}, {collection: 'user_educations'});

const Education = mongoose.model('Education', educationSchema)

module.exports = Education;