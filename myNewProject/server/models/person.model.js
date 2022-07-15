const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    description: { type: String }
}, { timestamps: true});
module.exports = mongoose.model('Person', PersonSchema);