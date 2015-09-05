var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");
var eventsRef = myFirebaseRef.child("events");

function Event(event_id, owner_id, playlist_id) {
  this.event_id = event_id;
  this.owner_id = owner_id;
  this.playlist = new Playlist(playlist_id);

  eventsRef.child("Event " + this.event_id).set({
    owner_id: this.owner_id,
    playlist_id: playlist_id
  });
}

Event.prototype.speak = function(){
    alert("Howdy, my name is" + this.owner_id);
};

function Playlist(id) {
  this.id = id;
}


function makeEvent() {
  var guid = Math.floor(Math.random() * 100000);
  var user_id = localStorage.user_id;
  var playlist_id = Math.floor(Math.random() * 100000);
  var event = new Event(guid, user_id, playlist_id);
  console.log(event);
}
