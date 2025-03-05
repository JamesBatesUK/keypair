// import the express framework
var express = require('express');

const favicon = require('serve-favicon');

// create an express app
var app = express();

// import the path module to help with directory paths
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the public directory to serve static files like images, stylesheets, and scripts
app.use(express.static(path.join(__dirname, 'public')));

// set the directory where views (ejs templates) are located
app.set('views', path.join(__dirname, 'views'));

// Serve the favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// create a global variable to store data that can be accessed by all views
app.locals.primary_nav = [
  { title: 'Home',  url: "/",       slug: 'home'  },
  { title: 'About', url: "/about",  slug: 'about' }
];

// log the year on each request
app.use((req, res, next) => {
  app.locals.year = new Date().getFullYear();
  console.log(`Updated year: ${app.locals.year}`); // Log to verify it's changing
  next();
});

// use res.render to render an ejs view file

// handle requests for the index (home) page
app.get('/', function(req, res) {
  // render the index view and pass in the current URL
  res.render('pages/index', { page : req.url });
});

// handle requests for the about page
app.get('/about', function(req, res) {
 // render the about view and pass in the current URL
 res.render('pages/about', { page : req.url });
});

// start the server and listen for incoming requests on port 8080
const PORT = 8080;
const IP = '0.0.0.0'; // Listen on all available network interfaces

app.listen(PORT, IP, () => {
  console.log(`Server is listening on port ${PORT}`);
});
