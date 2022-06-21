const express = require('express');
const app = express();
const router = express.Router();
const {postBlog, getBlogPost, patchBlogPost ,  deleteBlogPost} = require('../controller/blogController')




// post blog posts
router.post('/blogposts', postBlog);

// Get blog post 
router.get('/', (req, res)=>{
    res.send("Hello here!!!")
});

router.get('/blogposts', getBlogPost)

// Patch blog posts
router.patch('/blogposts/:id', patchBlogPost);

//  Delet blog post
router.delete('/blogposts/:id', deleteBlogPost);



module.exports = router;