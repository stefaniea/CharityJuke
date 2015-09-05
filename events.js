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
    this.song_price = price;
    eventsRef.child("Event " + event_id).update({ song_price: this.song_price });
  };
  this.setPrioritySongPrice = function(priority_price){
    this.priority_song_price = priority_price;
    eventsRef.child("Event " + event_id).update({ priority_song_price: this.priority_song_price });
  }
  this.setEventDescription = function(description){
    this.event_description = description;
    eventsRef.child("Event " + event_id).update({ description: this.event_description });
  }

  eventsRef.child("Event " + event_id).set({
    event_id: this.event_id,
    owner_id: this.owner_id,
    playlist: []
  });
}

function makeEvent() {
    var event_name = document.getElementById("event_name").value;

    if (event_name != "") {
      $("#event_name_alert").hide();
      var guid = Math.floor(Math.random() * 100000);
      var user_id = localStorage.user_id || "user_id not found";
      var playlist_id = guid;
      var event = new Event(guid, user_id, playlist_id);

      event.setEventName(event_name);
      event.setStartTime(document.getElementById("starttime").value);
      event.setEndTime(document.getElementById("endtime").value);
      event.setEventDescription(document.getElementById("event_description").value);
      event.setSongPrice(0.25);
      event.setPrioritySongPrice(0.75);
      console.log(event);

      window.location.href = '/event.html';
    } else {
      $("#event_name_alert").show();
    }
}

function search() {
  var search_id = document.getElementById("search_input").value;
  alert(search_id);
  return false;
}
