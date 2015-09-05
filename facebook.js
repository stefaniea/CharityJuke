 var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com");

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
    } // end else
  }); // authwithoauthpopup
};
