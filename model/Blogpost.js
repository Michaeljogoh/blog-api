const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate')
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

// pagination
blogPostSchema.plugin(mongoosePaginate);
// exporting Blog post model
const blogPost  = mongoose.model('blogPost', blogPostSchema);
module.exports = blogPost;