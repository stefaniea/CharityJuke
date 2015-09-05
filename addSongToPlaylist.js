var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");

function addSongToPlaylist(playlist_id) {
	myFirebaseRef.on("value", function(snapshot) {
	  console.log(snapshot.val());
	}, function (errorObject) {
	  console.log("The read failed: " + errorObject.code);
	});
};