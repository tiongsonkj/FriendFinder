var path == request('path');

module.exports = function(app) {

	// default, catch-all route that leads to home.html which displays the home page.
	app.use( function(request, response) {
		response.sendFile(path.join(__dirname, "/../app/public/home.html"));
	});

	// A GET Route to /survey which should display the survey page.
	app.get("/survey", function(request, response) {
		response.sendFile(path.join(__dirname, "/../app/public/survey.html"))
	});


}