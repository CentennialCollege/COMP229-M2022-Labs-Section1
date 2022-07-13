import express from 'express';
const router = express.Router();

import { DisplayAddPage, DisplayEditPage, DisplayMovieListPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage } from '../Controllers/movie-list';

/* Display Movie List Page */
router.get('/movie-list', DisplayMovieListPage);

/* Display Add Page */
router.get('/add', DisplayAddPage);

/* Display Edit Page */
router.get('/edit/:id', DisplayEditPage);

/* Process Add Page */
router.post('/add', ProcessAddPage);

/* Process Edit Page */
router.post('/edit/:id', ProcessEditPage);

/* Process Delete Page */
router.get('/delete/:id', ProcessDeletePage);

export default router;