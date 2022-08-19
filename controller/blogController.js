const blogPost = require('../model/Blogpost');


// Post blog post

const postBlog =  async (req , res) =>{
  const {  title , content , author} = req.body

  if(!title || !content || !author){
    return res.status(400).json({error: "Fill all fields"})
  }
   const postBlog = await blogPost.create({title , content , author});
  res.status(200).json({postBlog});
};

// Get Blog Post
const getBlogPost = async (req , res) =>{
   // query with page limit 
   const {page = 1, limit = 10} = req.query;

   const getBlogPost = await blogPost.find()
   .limit(limit * 1)
   .skip((page - 1 ) * limit)
   .exec();
   //Get Total documents in blogPost collection
 const count = await blogPost.countDocuments();
 res.json({getBlogPost, totalPages:Math.ceil(count / limit), currentPage: page}) 
};

// Patch Blog Post
const patchBlogPost = async (req , res) =>{
  const patchBlog =   await blogPost.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json({patchBlog});
};

// Delete Blog Post
const deleteBlogPost = async (req, res) =>{
  const deleteBlog   = await blogPost.findByIdAndDelete(req.params.id);
    res.status(200).json({deleteBlog});
};






module.exports ={postBlog, getBlogPost, patchBlogPost,  deleteBlogPost}