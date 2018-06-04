const mongo = require('mongoose');
const countrySchema = mongo.Schema({
    name: { type: String },
    capital: { type: String }
});

module.exports = mongo.model('country', countrySchema);