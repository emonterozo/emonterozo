const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const technologySchema = new Schema({
    technology_name: String,
    technology_url: String,
    technology_image: String,
    is_skill: Boolean,
    ratings: Number
 }, {collection: 'technologies'})

 const Technology = mongoose.model('Technology', technologySchema)

module.exports = Technology;


