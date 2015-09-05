SC.initialize({
  client_id: 'cb32f7702a0bd6053ef890bdf200525a',
  redirect_uri: 'http://example.com/callback'
});


function newSearch() {
	search($('#trackQuery').val());
}

/** 
*   Search for tracks with the given searchTerm
*/
function search(searchTerm) {
	alert(searchTerm);
	SC.get('/tracks', { q: searchTerm}, function(tracks) {
		display(tracks);
		console.log(tracks);
	});	
}

function display(jsonTracks) {
	console.log("Tracks:");
	jsonTracks.forEach(function(track) {
		console.log(track.permalink_url);
	});
}



