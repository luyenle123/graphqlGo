const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrderLineSchema = new Schema({
    qty: {type: Number},
    orderId: {type: String},
    productId: {type: String}
})

module.exports = mongoose.model('orderline', OrderLineSchema)