const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workExperienceSchema = new Schema({
    company_name: String,
    company_address: String,
    job_title: String,
    inclusive_date: String,
    order: Number,
    is_employed: Boolean
}, {collection: 'user_work_experiences'});

const WorkExperience = mongoose.model('WorkExperience', workExperienceSchema)

module.exports = WorkExperience;