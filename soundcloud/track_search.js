SC.initialize({
  client_id: 'cb32f7702a0bd6053ef890bdf200525a',
  redirect_uri: 'http://example.com/callback'
});

SC.connect(function() {
  var tracks = [290, 291, 292].map(function(id) { return { id: id } });
  SC.post('/playlists', {
	playlist: { title: 'My Playlist', tracks: tracks }
  });
});

SC.get('/playlists/1234323', function(playlist) {
	alert("get");
	for (var i = 0; i < playlist.tracks.length; i++) {
		console.log(playlist.tracks[i].length);
  	}
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
		console.log(track.permalink_url);
	});
}



