import express from 'express';

const app = express(); // creates a new express application
const port = 3000;

app.get('/', function(req, res) 
{
  res.send('Hello, World!');
});

// listener - similar to server.listen
app.listen(port, function() 
{
  console.log(`Example app listening on port ${port}`);
});