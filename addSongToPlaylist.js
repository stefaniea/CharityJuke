var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");

function addSongToPlaylist(EventID, Songs) {
	var ref = new Firebase("https://charityjuke.firebaseio.com/events");
	ref.orderByChild("event_id").equalTo(EventID).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		var ev = snapshot.value();
 		console.log(snapshot.value());
 		if (ev.length < 1) {
 			console.log("Event ID resulted in 0 events.");
 		} else {
 			
 		}
});
};