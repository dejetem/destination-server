import express from 'express';

import { getPosts, getPost,getPostsBySearch, createPost, updatePost, commentPost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.get('/:id',auth, getPost);
router.post('/',auth, createPost);
router.patch('/:id',auth, updatePost);
router.patch('/:id/likePost',auth, likePost);
router.post('/:id/commentPost', auth, commentPost);
router.delete('/:id',auth, deletePost);

export default router;