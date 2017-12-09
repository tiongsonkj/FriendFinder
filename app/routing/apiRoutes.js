var friendsData = require('../data/friends.js');

module.exports = function (app) {
	
	// display JSON of all possible friends
	app.get("/api/friends", function(request, response) {
		response.json(friendsData);
	});
}



// // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
// app.post("/api/friends", function(request, response) {

// });