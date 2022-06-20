const blogPost = require('../model/blogPost');


// Post blog post

const postBlog =  async (req , res) =>{
        const postBlog = new blogPost({
            title:req.body.title,
            content: req.body.content,
            author: req.body.author 
            });
      const addBlogpost =   await postBlog.save();
        res.status(200);
        res.json({addBlogpost});
};

// Get Blog Post
const getBlogPost = async (req , res) =>{
    let { page, size } = req.query
    if (!page) page = 1;
    if (!size) size = 10;
    const limit = parseInt(size)
    const skip = (page - 1) * size
  const getBlogPost = await blogPost.find({}).limit(limit).skip(skip);
  const previous_pages = page - 1;
    const next_pages = Math.ceil((total_documents-skip)/size);
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