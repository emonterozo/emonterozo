const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    social_name: String,
    social_url: String,
    icon_name: String
}, {collection: 'user_socials'});

const Social = mongoose.model('Social', socialSchema)

module.exports = Social;