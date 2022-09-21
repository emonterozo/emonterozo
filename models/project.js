const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    project_name: String,
    project_description: String,
    project_tags: Array,
    project_code: String,
    project_demo: String,
    is_visible: Boolean,
    is_mobile: Boolean,
    preview: Array,
    project_banner: String,
    order: Number,
  },
  { collection: "user_projects" }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
