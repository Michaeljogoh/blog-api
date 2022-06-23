const blogPost = require('../model/Blogpost');


// Post blog post

const postBlog =  async (req , res) =>{
  const {  title , content , author} = req.body
        const postBlog = new blogPost({title , content , author});
      const addBlogpost =   await postBlog.save();
        res.status(200);
        res.json({addBlogpost});
};

// Get Blog Post
const getBlogPost = async (req , res) =>{
  // pagination
  const {page , perPage} = req.query;
  const options = {
    page: parseInt(page , 10) || 1,
    limit: parseInt(perPage, 5) || 5,
  }
const getBlogPost = await blogPost.paginate({}, options);
  res.status(200);
  res.json({getBlogPost}); 
};

// Patch Blog Post
const patchBlogPost = async (req , res) =>{
    await blogPost.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200);
    res.json('Blog Post Updated');
};

// Delete Blog Post
const deleteBlogPost = async (req, res) =>{
    await blogPost.findByIdAndDelete(req.params.id);
    res.status(200);
    res.json("Blog Post Deleted");
};






module.exports ={postBlog, getBlogPost, patchBlogPost,  deleteBlogPost}