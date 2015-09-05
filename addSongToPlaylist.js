var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");

function addedSong(trackURL, title, artist, artworkURL, user_id) {
	this.trackURL = trackURL;
	this.title = title;
	this.artist = artist;
	this.artworkURL = artworkURL;
	this.addedBy = function(user_id) {
		var usersRef = myFirebaseRef.child("users");
		var user;
		usersRef.child("User "+ user_id).on("value", function(snapshot) {
	 		console.log(snapshot.key());
	 		user = snapshot.val();
	 		console.log("GetUser: " + user);
		});
		this.addedBy = user;
	};
}

function addSongToPlaylist(EventID, song) {
	var eventsRef = new Firebase("https://charityjuke.firebaseio.com/events");
	eventsRef.child("Event "+EventID).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		var ev = snapshot.val();
 		console.log(snapshot.val());
 		if (ev.length && ev.length < 1) {
 			console.log("Event ID resulted in 0 events.");
 		} else {
 			if (ev.playlist) {
 			 var updated_playlist = ev.playlist.Unshift(song);
 			 eventsRef.child("Event "+EventID).update({"playlist" : updated_playlist});
 			} else {
 				eventsRef.child("Event "+EventID).set({"playlist" : [song]});
 			}
 		 }
	});
};
