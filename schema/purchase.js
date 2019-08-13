var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var purchase_schema = new Schema({
supplierp_place:String,
purchase_billno:String,
date:Date,
pay:String,
purchase_amount:String,
purchase_unpaidamount:Number,
pay_recno:String,
pay_date:Date,
dis : String,
supplier:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'supplier'
}

});

module.exports = mongoose.model('purchase',purchase_schema);