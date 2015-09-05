var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");
var eventsRef = myFirebaseRef.child("events");

function Event(event_id, owner_id, playlist_id) {
  this.event_id = event_id;
  this.owner_id = owner_id;
  this.playlist = playlist_id;
  this.setEventName = function(name){
    this.event_name = name;
    eventsRef.child("Event " + event_id).update({ event_name: this.event_name });
  }
  this.setStartTime = function(starttime){
    this.starttime = starttime;
    eventsRef.child("Event " + event_id).update({ starttime: this.starttime });
  };
  this.setEndTime = function(endtime){
    this.endtime = endtime;
    eventsRef.child("Event " + event_id).update({ endtime: this.endtime });
  };
  this.setSongPrice = function(price){
    this.songPrice = price;
    eventsRef.child("Event " + event_id).update({ song_price: this.songPrice });
  };
  this.setPrioritySongPrice = function(priority_price){
    this.prioritySongPrice = priority_price;
    eventsRef.child("Event " + event_id).update({ priority_song_price: this.prioritySongPrice });
  }

  eventsRef.child("Event " + event_id).set({
    event_id: this.event_id,
    owner_id: this.owner_id,
    playlist: []
  });
}

function makeEvent() {
  var guid = Math.floor(Math.random() * 100000);
  var user_id = localStorage.user_id || "user_id not found";
  var playlist_id = guid;
  var event = new Event(guid, user_id, playlist_id);

  event.setEventName(document.getElementById("event_name").value);
  event.setStartTime("12pm");
  event.setEndTime("1pm");
  event.setSongPrice(0.25);
  event.setPrioritySongPrice(0.75);
  console.log(event);
}
