const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_firstname: String,
    user_middlename: String,
    user_lastname: String,
    user_title: String,
    user_summary: String,
    user_address: String,
    user_contact: String,
    user_primary_email: String,
    user_secondary_email: String,
    user_image: String,
    user_resume: String,
    canContact: Boolean,
    landing_page_image: String,
    is_resume_visible: Boolean,
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
