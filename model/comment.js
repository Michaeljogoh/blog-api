const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({

    comment:{
        type: String,
        require:true
    },

    blogpost:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogPost'
    },
    date:{
        type: Date,
        default:Date.now()
    }

})

const comments = mongoose.model('comments' , commentSchema)
module.exports = comments;