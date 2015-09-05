SC.initialize({
  client_id: 'cb32f7702a0bd6053ef890bdf200525a'
});

search("kygo");

/** 
*   Search for tracks with the given searchTerm
*/
function search(searchTerm) {
	SC.get('/tracks', { q: searchTerm}, function(tracks) {
	  display(tracks);
	  console.log(tracks);
	});	
}

function display(jsonTracks) {
	console.log("Tracks:");
	jsonTracks.forEach(function(track) {
		console.log(track.stream_url); 


		var track_url = 'http://soundcloud.com/forss/flickermood';
		SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
		console.log('oEmbed response: ' + oEmbed);
		});

	});
}

