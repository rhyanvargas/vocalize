const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');
// pass auth to any routes that require auth.
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

const ctrlPosts = require('../controllers/posts');
const ctrlAuth =require('../controllers/authentication');

// Authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

// Get all posts
router.get('/posts', ctrlPosts.getPosts);

// Get all posts with a specific user vote history
router.get('/posts/:user', ctrlPosts.getPosts);
router.post('/posts', auth, ctrlPosts.postClip);
router.get('/categories', ctrlPosts.getCategories);
router.get('/categories/:category', ctrlPosts.getCategoryPosts);
router.get('/categories/:category/:user', ctrlPosts.getCategoryPosts);

router.get('/:user/clips', ctrlPosts.getClips);
router.put('/clips/:id', auth, ctrlPosts.updateClip);
router.delete('/clips/:id', auth, ctrlPosts.deleteClip);
router.post('/clips/:id/vote', auth, ctrlPosts.vote);

module.exports = router;
