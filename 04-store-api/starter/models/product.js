const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'product name must be provide']
    },
    price:{
        type:Number,
        required:[true, 'product price must be provide']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['ikea','liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported ' ,
        },
        
        //enum:['Ikea','liddy', 'Caressa', 'marcos'],

    },
})

module.exports = mongoose.model('Product', productSchema)