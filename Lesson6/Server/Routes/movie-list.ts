import express from 'express';
const router = express.Router();

import { DisplayMovieListPage } from '../Controllers/movie-list';

import { AuthGuard } from '../Util/index';

/* Display Movie List Page */
router.get('/movie-list', AuthGuard, DisplayMovieListPage);

export default router;