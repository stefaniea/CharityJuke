var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");
var eventsRef = myFirebaseRef.child("events");

function Event(event_id, owner_id, playlist_id) {
  this.event_id = event_id;
  this.owner_id = owner_id;
  this.playlist = playlist_id;
  this.setStartTime = function(starttime){
    this.starttime = starttime;
  };
  this.setEndTime = function(endtime){
    this.endtime = endtime;
  };
  this.setSongPrice = function(price){
    this.songPrice = price;
  };
  this.setPrioritySongPrice = function(priority_price){
    this.prioritySongPrice = priority_price;
  }

  eventsRef.child("event").set({
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

  event.setStartTime("12pm");
  event.setEndTime("1pm");
  console.log(event);
}
