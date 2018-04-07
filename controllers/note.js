//4.route for saving/updating article's comment section
module.exports = function (app){
    app.post("/saved", function(req, res) {
        //create a new comment and post it!
        db.Comment.create(req.body)
            .then(function(dbArticle) {
                return db.Article.findOneAndUpdateOne({})
                    //what to put in return statement?
                    //not updating based on id, but comment?
            })
            .then(function(dbArticle) {
                res.json(dbArticle);
            })
            .catch(function(err) {
                res.json(err);
            });
    })
}
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