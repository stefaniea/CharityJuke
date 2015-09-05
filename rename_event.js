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
	 	GetUserAndPopulate(ev.owner_id+"");
	 	var playlist = $("#player");
	 	console.log(playlist);
		for(var i = 0; i < ev.playlist.length; i++) {
			var link = $();
			player.append("<a href='"+ev.playlist[i].trackURL+"' class='sc-player'></a>");
		}
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