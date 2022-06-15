import express from 'express';
const router = express.Router();

import { DisplayMovieListPage } from '../Controllers/movie-list';

/* Display Movie List Page */
router.get('/movie-list', DisplayMovieListPage);

export default router;