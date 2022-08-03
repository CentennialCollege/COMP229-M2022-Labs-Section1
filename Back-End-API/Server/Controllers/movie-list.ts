import express from 'express';
import { CallbackError } from 'mongoose';

// import the Movie Model
import Movie from '../Models/movie';

import { UserDisplayName  } from '../Util';

export function DisplayMovieListPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
    Movie.find(function(err, moviesCollection)
    {
      // Database error
      if(err)
      {
        console.error(err.message);
        res.end(err);
      }
      
      res.json({success: true, message: 'Movie-List Displayed Successfully', movies: moviesCollection, user: req.user});
    });
}

export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  res.json({success: true, message: 'Add Page Displayed Successfully!'});
}

export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the db and read the movie into the edit page
  Movie.findById(id, {}, {}, function(err, movieToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.json({success: true, message: 'Edit Page Displayed Successfully!', movie: movieToEdit});
  });
}

export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  // instantiate a new Movie to Add
  let newMovie = new Movie
  ({
    "Name": req.body.Name,
    "Director": req.body.Director,
    "Year": req.body.Year,
    "Rating": req.body.Rating
  });

  // Insert the new Movie object into the database (movies collection)
  Movie.create(newMovie, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // new movie has been added -> refresh the movie-list
    res.json({success: true, message: 'Successfully Added Movie', movie: newMovie});
  })
}

export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // instantiate a new Movie to Edit
  let updatedMovie = new Movie
  ({
    "_id": id,
    "Name": req.body.Name,
    "Director": req.body.Director,
    "Year": req.body.Year,
    "Rating": req.body.Rating
  });

  // update the movie in the database
  Movie.updateOne({_id: id}, updatedMovie, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // edit was successful -> go to the movie-list page
    res.json({success: true, message: 'Successfully Edited Movie', movie: updatedMovie});
  });
}

export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction): void 
{
  let id = req.params.id;

  // pass the id to the database and delete the movie
  Movie.remove({_id: id}, function(err: CallbackError)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // delete was successful
    res.json({success: true, message: 'Successfully Deleted Movie!'});
  });
}
