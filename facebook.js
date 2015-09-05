 var myFirebaseRef = new Firebase("https://charityjuke.firebaseio.com/users");

/* window.fbAsyncInit = function() {
    FB.init({
      appId      : '606556702820151',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
  };
*/

function facebookLogin() {
    myFirebaseRef.authWithOAuthPopup("facebook", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);

    } else {
      console.log("Authenticated successfully with payload:", authData);
       localStorage.user_id = authData.facebook.id; // So hacky. Please change.
       // Insert or update this user:
       myFirebaseRef.set({
        user_id: authData.facebook.id,
        name: authData.facebook.displayName,
        profile_img: authData.facebook.profileImageURL
      }); //end set
    } // end else
  }); // authwithoauthpopup
};
