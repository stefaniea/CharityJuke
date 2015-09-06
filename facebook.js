 var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com");

function updateButtonDisplay() {
    var user = localStorage.user_id;
        if (user != "" && user) {
            $("#login").hide();
            $("#logout").show();
            $("#event").show();
            $("#browse").show();
        } else {
            $("#logout").hide();
            $("#event").hide();
            $("#browse").hide();
            $("#login").show();
        }
};

function facebookLogoutJK() {
  localStorage.user_id = "";
  myFirebaseRef.unauth();
  updateButtonDisplay();
  location.reload();
};

function facebookLogin() {
    myFirebaseRef.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);

    } else {
      console.log("Authenticated successfully with payload:", authData);
       localStorage.user_id = authData.facebook.id; // So hacky. Please change.
       // Insert or update this user:
        myFirebaseRef.child("users").child("User " + authData.facebook.id).set({
        user_id: authData.facebook.id,
        name: authData.facebook.displayName,
        profile_img: authData.facebook.profileImageURL
      }); //end set
            updateButtonDisplay();
    } // end else
  }); // authwithoauthpopup
<<<<<<< HEAD
    updateButtonDisplay();
    location.reload();
=======
>>>>>>> ac822a8467525139956cf717c7388d45afa2f2bd
};
