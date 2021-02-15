const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    project_name: String,
    project_description: String,
    project_tags: Array,
    project_code: String,
    project_demo: String,
    isVisible: Boolean
}, {collection: 'user_projects'});

const Project = mongoose.model('Project', projectSchema)

module.exports = Project;