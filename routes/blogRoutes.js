const express = require('express');
const router = express.Router();
const {postBlog, getBlogPost, patchBlogPost ,  deleteBlogPost} = require('../controller/blogController')




// post blog posts
router.post('/blogposts', postBlog);


router.get('/', getBlogPost)

// Patch blog posts
router.patch('/blogposts/:id', patchBlogPost);

//  Delet blog post
router.delete('/blogposts/:id', deleteBlogPost);



module.exports = router;