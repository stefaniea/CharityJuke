var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/");
var clientSecret = 'd8f69c7e7c5e5b7119876aba9382a5d5';
var clientId = 'cb32f7702a0bd6053ef890bdf200525a';

// initialize client with app credentials
SC.initialize({
  client_id: clientId,
  redirect_uri: 'http://example.com/callback'
});

// initiate auth popup
SC.connect(function() {
  SC.get('/me', function(me) {
    alert('Hello, ' + me.username);
  });
});