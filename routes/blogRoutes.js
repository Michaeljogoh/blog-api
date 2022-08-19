const express = require('express');
const router = express.Router();
const {postBlog, getBlogPost, patchBlogPost ,  deleteBlogPost} = require('../controller/blogController');
const {comment , fetchComment , deleteComment} = require('../controller/commentController');






// post blog posts
router.post('/blogposts', postBlog);


router.get('/', getBlogPost)

// Patch blog posts
router.patch('/blogposts/:id', patchBlogPost);

//  Delete blog post
router.delete('/blogposts/:id', deleteBlogPost);


router.post('/:id', comment);

router.get('/comments', fetchComment);

router.delete('/:id', deleteComment)



module.exports = router;