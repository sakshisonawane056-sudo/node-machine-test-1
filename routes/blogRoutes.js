const express = require('express');

const {
    getBlogs,
    getBlogById,
    createBlog,
    deleteBlog,
    updateBlog,
} = require('../controllers/blogController');

const router = express.Router();

//fetch all blogs
router.get('/', getBlogs);

//fetch single blog
router.get('/:id', getBlogById);

//create blog
router.post("/", createBlog);

//delete blog
router.delete('/:id', deleteBlog);

//updated post
router.patch('/:id', updateBlog);

module.exports = router;