const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    totalProduct: {type: Number},
    orderDate: {type: String},
    customerId: {type: String}
})

module.exports = mongoose.model('order', OrderSchema)