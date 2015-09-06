var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");

function addedSong(trackURL, title, artist, artworkURL, user_id) {
	this.trackURL = trackURL;
	this.title = title;
	this.artist = artist;
	this.artworkURL = artworkURL;
	this.addedBy = user_id;
}

function addSongToPlaylist(EventID, song) {
	var eventsRef = new Firebase("https://charityjuke.firebaseio.com/events");
	eventsRef.child("Event "+EventID).once("value", function(snapshot) {
 		console.log(snapshot.key());
 		var ev = snapshot.val();
 		console.log(snapshot.val());
 		if (ev.length && ev.length < 1) {
 			console.log("Event ID resulted in 0 events.");
 		} else {
 			if (ev.playlist) {
 			 console.log(ev.playlist);
 			 var updated_playlist = new Array(ev.playlist.length+1);
 			 updated_playlist[0] = song;
 			 for (var i = 1; i < updated_playlist.length; i++) {
 			 	updated_playlist[i] = ev.playlist[i-1];
 			 }
 			 console.log(updated_playlist);
 			 eventsRef.child("Event "+EventID).update({playlist : updated_playlist});
 			} else {
 				eventsRef.child("Event "+EventID).set({playlist : [song]});
 			}
 		 }
	});
	LoadEvent(EventID);
};
