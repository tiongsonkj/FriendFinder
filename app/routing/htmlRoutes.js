// route to get to survey page
app.get("/survey", function(request, response) {
	response.sendFile(path.join(__dirname, ""));
});

// default, catch-all route that leads to home.html which displays the home page.
app.get("*", function(request, response) {
	response.sendFile(path.join(__dirname, ""));
});