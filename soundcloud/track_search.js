SC.initialize({
  client_id: 'cb32f7702a0bd6053ef890bdf200525a',
});


function searchTrack() {
	search($('#trackQuery').val());
};

/**
*   Search for tracks with the given searchTerm
*/
function search(searchTerm) {
	SC.get('/tracks', { q: searchTerm}, function(tracks) {
		display(tracks);
	});
};

function display(jsonTracks) {
	var results = $('#search-results');
	jsonTracks.forEach(function(track) {
		// TODO: make this into a pretty grid with artwork yay
    artwork_url = track.artwork_url;
    if (artwork_url == null) {
        artwork_url = "https://edbacker.com/themes/edbacker/images/no-image.png";
    }
		var element = '<div class=\'row\'><div class=\'container\'><a href="#" onclick="addSong(\'' + track.permalink_url +
			'\',\'' + track.title +'\',\'' +
			artwork_url + '\')"><li class="list-group-item"><div><img style="height: 100px;" src='+ '\'' + artwork_url + '\'' +'/><span style="color: white; margin-left: 10px">'+ track.title +'</span></div></a></li></div></div>';
			$(results).append(element);
		});
};

function addSong(trackUrl, title, artwork_url) {
	console.log("trackURL " + trackUrl + "; title " + title + "; artwork_url " + artwork_url);
	var event_id = location.search.split('event=')[1];

	// PAYMENT STUFF
	getSongPrice(event_id, trackUrl);

	var element = '<a href="' + trackUrl + '"></a>';
	console.log(element);
	$(".sc-player").append(element);
	var user_id = localStorage.user_id || "user_id not found";
	if (!title) title = "untitled";
	var song = new addedSong(trackUrl, title, "unknown", artwork_url, user_id);
	console.log("THIS IS THE SONG OBJ" + song);
	addSongToPlaylist(event_id, song);
};
