//3.route for getting all articles from the db
app.get("/home", function(req, res) {
    db.Article.find //findone and update one method?
        .populate("saved") //populate saved page 
        .then(function(dbArticle) {
            res.json(dbArticle);
        })
        .catch(function(err) {
            res.json(err);
        });
});