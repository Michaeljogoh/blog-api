const express = require('express');
const app = express();
const router = express.Router();
const {postBlog, getBlogPost, patchBlogPost ,  deleteBlogPost}  = require('../controller/blogController');

router.get('/', (req, res)=>{
    res.send("Hello here we are again");
});


// post blog posts
router.post('/blogposts', postBlog);

// Get blog post paginational
router.get('/blogposts', getBlogPost)

// Patch blog posts
router.patch('/blogposts/:id', patchBlogPost);

//  Delet blog post
router.delete('/blogposts/:id', deleteBlogPost);



module.exports = router;