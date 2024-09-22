const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    firstname: {type: String},
    lastname: {type: String}
})

module.exports = mongoose.model('customer', CustomerSchema)