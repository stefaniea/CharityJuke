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
		var element = '<li><a href="#" onclick="addSong(\'' + track.permalink_url + '\')">' + track.title + '</a></li>';
		console.log(element);
		$(results).append(element);
	});
};

function addSong(trackUrl) {
	console.log(trackUrl);
	var element = '<a href="' + trackUrl + '"></a>';
	console.log(element);
	$(".sc-player").append(element);
};
