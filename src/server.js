// import the express framework
var express = require('express');

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

// create a global variable to store data that can be accessed by all views
app.locals.primary_nav = [
  { title: 'Home',  url: "/",       slug: 'home'  },
  { title: 'About', url: "/about",  slug: 'about' }
];

// use res.render to render an ejs view file

// handle requests for the index (home) page
app.get('/', function(req, res) {
  // render the index view and pass in the current URL
  res.render('pages/index', { page : req.url });
});

// handle requests for the about page
//app.get('/about', function(req, res) {
//  // render the about view and pass in the current URL
//  res.render('pages/about', { page : req.url });
//});

// start the server and listen for incoming requests on port 8080
app.listen(8080);
console.log('Server is listening on port 8080');