//setting up connection to database 

//requring package/dependency
var mongoose = require('mongoose');
//creating connection to particular database
mongoose.connect('mongodb://localhost/databasename', function(err) {
    //setting up error msg in case connection does not work    
    if (err) throw err;
    console.log("It's working girl! ^ ^ ");
});

//creating schema for data
var gossipSchema = mongoose.Schema({
    //not referencing another schema object so not needed
    //_id: mongoose.Schema.Types.ObjectId,
    gossip: {
        storyHeadline: String,
        summary: String,
        //how to add link in schema?
        url: String
    }
});