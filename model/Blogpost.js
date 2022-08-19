const mongoose = require('mongoose');
// creating blog post schema 
const blogPostSchema = new mongoose.Schema({

    title:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required: true
    },

    author:{
        type: String,
        required: true
    },

    date:{
        type: Date,
        default: Date.now
    }

});


const blogPost  = mongoose.model('blogPost', blogPostSchema);
module.exports = blogPost;