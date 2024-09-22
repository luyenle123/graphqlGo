const Product = require('../models/product')
const Customer = require('../models/customer')
const Order = require('../models/order')
const OrderLine = require('../models/orderline')

const mongoDataMethods = {
    getAllProducts: async () => {
        return await Product.find()
    },
    getAllCustomers: async () => {
        return await Customer.find()
    },
    getAllOrders: async (condition = null) => condition === null ? await Order.find() : await Order.find(condition),
    getAllOrderLines: async (condition = null) => condition === null ? await OrderLine.find() : await OrderLine.find(condition),

    getProduct: async (id) => {
        return await Product.findById(id)
    },
    getCustomer: async (id) => {
        console.log(id)
        return await Customer.findById(id)
    },
    getOrder: async (id) => {
        return await Order.findById(id)
    },

    getProductOrders: async (id) => {
        var existLines = await OrderLine.find({ productId: id });
        if(existLines.length > 0){
            var orderIdLst = existLines.map(({ orderId }) => orderId)
            var orderIds = existLines.map(o => ({ _id: o.orderId }));
            //console.log(JSON.stringify(orderIds));
            var results = []//{_id: "66efaf7ab906bce5971ff95a"}

            for(var i=0;i<orderIdLst.length;i++){
                var oId = orderIdLst[i];
                var r = await Order.findById(oId); 
                results.push(r);

            }

            return results;
        }

        return [];
    },
}

module.exports = mongoDataMethods