


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDpn9VudLGee1qemg1ylUHkxTgQ6RGyGEM",
    authDomain: "electronics-c2e48.firebaseapp.com",
    databaseURL: "https://electronics-c2e48.firebaseio.com",
    projectId: "electronics-c2e48",
    storageBucket: "electronics-c2e48.appspot.com",
    messagingSenderId: "815913577160",
    appId: "1:815913577160:web:1c6ea0ab8040b3a1df53fd",
    measurementId: "G-WT35NEPFWG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 


  const auth = firebase.auth();

  function signUp(){
	  
	  var email = document.getElementById("email");
	  var password = document.getElementById("password");
	  
		 const objAuth = auth.createUserWithEmailAndPassword(email.value,password.value);
		 objAuth.catch(e => alert(e.message));
	      alert("You are Signed UP")
  }
  


function signIn(){
	  
	
	 
	 // window.alert("get up from dream u r not logged in.just checking");

	
    var uname=document.getElementById("email").value;
	var pw=document.getElementById("password").value;
	
	firebase.auth().signInWithEmailAndPassword(uname, pw).then(function(){
		
		window.location.replace('homePage.html');
		
	}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  
		  window.alert("Error : "+errorMessage);
		  // ...
		});
	
	
}

function logout(){
	
	
firebase.auth().signOut().then(function() {

	alert("You are signed out");
	 
	 window.location.replace('index.html')
}).catch(function(error) {
  // An error happened.
	alert("error not out");
	
});

}




firebase.auth().onAuthStateChanged(function(user){

	
	if(user){
		
		
		var email = user.email;
		alert("Active User"+email);
		
	
		
		//var user= firebase.auth().currentUser();
		
		if(user != null){
			
	
			
			document.getElementById("user_para").innerHTML ="Welcome:" +email;
			//window.location.replace('homePage.html')
			
		}
	
	}else{
		alert("No active User");
	}
	
});