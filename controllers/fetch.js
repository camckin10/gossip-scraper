//2.route to find all articles on site
module.exports = function (app) {
    app.get("/home", function(req, res) {
        db.Article.find({})
            .then(function(dbArticle) {
                res.json(dbArticle);
            })
            .catch(function(err) {
                res.json(err);
            });
    })
}
// app.get("/home", function(req, res) {
//     db.Article.find({})
//         .then(function(dbArticle) {
//             res.json(dbArticle);
//         })
//         .catch(function(err) {
//             res.json(err);
//         });
// });