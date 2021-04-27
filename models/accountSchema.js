const mongoose = require ("mongoose")

const accountSchema = mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    day:{
        type: String,
        required: true
    }
    
},{
    timestamp:true
})

const Account = mongoose.model("Account", accountSchema)
module.exports = Account;