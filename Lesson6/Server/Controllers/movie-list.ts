import express from 'express';

// import the Movie Model
import Movie from '../Models/movie';

export function DisplayMovieListPage(req: express.Request, res: express.Response, next: express.NextFunction) 
{
    Movie.find(function(err, moviesCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      res.render('index', { title: 'Movie List', page: 'movie-list', movies: moviesCollection });
    });
}