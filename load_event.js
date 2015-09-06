// For joining and displaying events

var eventsRef = new Firebase("https://charityjuke.firebaseio.com/events");

function GetUserAndPopulate(user_id) {
	var ref = new Firebase("https://charityjuke.firebaseio.com");
	var usersRef = ref.child("users");
	var user;
	usersRef.child("User "+ user_id).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		user = snapshot.val();
 		console.log("GetUser: " + user);
		$('#owner-name').text(user.name);
		$('#owner-img').attr('src', user.profile_img);
	});
	return user;
};

function PopulateHtml(ev) {
	if (ev.length && ev.length < 1) {
		console.log("Event ID resulted in 0 events.");
	} else {
		$('#event-name').text(ev.event_name);
		if (ev.description) {
			$('#event-description').text(ev.description);
		}
		if (ev.date) {
			$('#event-date').text(ev.date);
		}
		if (ev.starttime) {
			$('#event-starttime').text(ev.starttime);
		}
		if (ev.endtime) {
			$('#event-endtime').text(ev.endtime);
		}
		if (ev.song_price) {
			$('#event-price').text(ev.song_price);
		}
		if (ev.priority_song_price) {
			$('#event-priorityprice').text(ev.priority_song_price);
		}
	 	GetUserAndPopulate(ev.owner_id+"");
	 	var container = $("#playlist");
	 	container.html("");
	 	container.html("<div class='sc-player' id='player-container'></div>");
	 	var player = document.getElementById("player-container");
	 	console.log("here is the player!!!! " + player);
	 	player.innerHtml = "";
	 	var playlist = ev.playlist;
	 	console.log(playlist);
	 	console.log("length" + playlist.length)
		for(var i = playlist.length-1; i >= 0; i--) {
			var link = $();
			var a = document.createElement("a");
			a.href = playlist[i].trackURL;
			player.appendChild(a);
		}
		populate();
	 }
};

function LoadEvent(EventID) {
		eventsRef.child("Event "+EventID).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		var ev = snapshot.val();
 		console.log(snapshot.val());
 		PopulateHtml(ev);
 		 });
};
