var eventsRef = new Firebase("https://charityjuke.firebaseio.com/events");

function GetUser(user_id) {
	var usersRef = new Firebase("https://charityjuke.firebaseio.com/users");
	eventsRef.orderByChild("user_id").equalTo(user_id).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		var user = snapshot.val();
 		console.log(user);
 		return user;
	});
}

function PopulateHtml(ev) {
	if (ev.length && ev.length < 1) {
		console.log("Event ID resulted in 0 events.");
	} else {
		$('#event-name').innerHTML = ev.event_name;
		var user = GetUser(ev.owner_id);
		$('#owner-name').innertHTML = user.name;
		$('#owner-picture').src = user.profile_img;
		// populate playlist and other info here
	 }
}

function JoinEvent(EventID) {
		eventsRef.orderByChild("event_id").equalTo(EventID).on("value", function(snapshot) {
 		console.log(snapshot.key());
 		var ev = snapshot.val();
 		console.log(snapshot.val());
 			PopulateHtml(ev);
 		 }
	});
};