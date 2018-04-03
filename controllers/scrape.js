//1. GET route for scraping data from website
app.get("/home", function(req, res) {
    //taking data that we want to grab and display
    cheerios.get("http://www.theshaderoom.com/").then(function(response) {

        //load data taken from cheerios
        var $ = cheerio.load(response.data);

        $("article h3").each(function(i, element) {
            //store data in empty object
            var results = {}

            //text and href will be saved to empty object
            results.title = $(this)
                .children("a")
                .text();
            results.link = $(this)
                .children("a")
                .attr("href");

            db.Article.create(result)
                .then(function(dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function(err) {
                    return res.json(err);
                });
        });
        res.send("scraping done");
    });
});