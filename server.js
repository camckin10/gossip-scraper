//dependencies
var express = require("express");
var handlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");

//requiring all of the models --headline, note, index
var db = require("./models");

//port name
var PORT = 3000;

//initialize express
var app = express();



//body-parser for handling submission
app.use(bodyParser.urlencoded({ extended: true }));


//requiring all files from controllers folder
require("./controllers/fetch.js")(app);
require("./controllers/headline.js")(app);
require("./controllers/note.js")(app);
require("./controllers/scrape.js")(app);




//mongoose connection
//mongoose can now leverage Promises
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    //received err msg that useMongoClient has been deprecated
    //useMongoClient: true
});

// //Routes--CRUD
// //CRUD--CREATE/READ/UPDATE/DELETE 

// //1. GET route for scraping data from website
// app.get("/", function(req, res) {
//     //taking data that we want to grab and display
//     cheerios.get("http://www.theshaderoom.com/").then(function(response) {

//         //load data taken from cheerios
//         var $ = cheerio.load(response.data);

//         $("article h3").each(function(i, element) {
//             //store data in empty object
//             var results = {}

//             //text and href will be saved to empty object
//             results.title = $(this)
//                 .children("a")
//                 .text();
//             results.link = $(this)
//                 .children("a")
//                 .attr("href");

//             db.Article.create(result)
//                 .then(function(dbArticle) {
//                     console.log(dbArticle);
//                 })
//                 .catch(function(err) {
//                     return res.json(err);
//                 });
//         });
//         res.send("scraping done");
//     });
// });

// //2.route to find all articles on site
// app.get("/", function(req, res) {
//     db.Article.find({})
//         .then(function(dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function(err) {
//             res.json(err);
//         });
// });

// //3.route for getting all articles from the db
// app.get("/saved", function(req, res) {
//     db.Article.find //findone and update one method?
//         .populate("saved") //populate saved page 
//         .then(function(dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function(err) {
//             res.json(err);
//         });
// });

// //4.route for saving/updating article's comment section
// app.post("/saved", function(req, res) {
//     //create a new comment and post it!
//     db.Comment.create(req.body)
//         .then(function(dbArticle) {
//             return db.Article.findOneAndUpdateOne({})
//                 //what to put in return statement?
//                 //not updating based on id, but comment?
//         })
//         .then(function(dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function(err) {
//             res.json(err);
//         });
// });

// app.use(express.static(path.join(__dirname, 'public')));
// //Return the index for any other GET request
// app.get('/*', function(req, res) {
//     res.sendFile('home.handlebars', { root: path.join(__dirname, 'public') });
// });

app.listen(PORT, function() {
    console.log("the app is listening y'all!");
});