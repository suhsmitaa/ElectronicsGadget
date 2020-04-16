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
 
 
  
  function getData(){
  
	 var uIdd=firebase.auth().uid;
		alert(uIdd);
	 
	var rootref=firebase.database().ref('F0ddFuTXR3ZOoulLM8RWO2KgeUt1'+'/Customer Information/').once('value').then(function(snapshot){
	// rootref.on("child_added", snap => 
			
		
		 var recommendation=snapshot.val().Recommendation;
		 
	alert(recommendation);
	
	     	 document.getElementById("messageCusta").innerHTML =recommendation}); 
		
	        
  
	        var rootrefe=firebase.database().ref('frLLr5wpj8aUS5NZLr1ULILcr4g1'+'/Customer Information/').once('value').then(function(snapshot){
	       	 var recommendation=snapshot.val().Recommendation;
			 
	     	alert(recommendation);
	     	
	     	     	 
	     		document.getElementById("messageCustb").innerHTML =recommendation}); 
	        
	        var rootrefe=firebase.database().ref('cy0QTt5hOSQd08S5Z36j5adwDjZ2'+'/Customer Information/').once('value').then(function(snapshot){
		       	 var recommendation=snapshot.val().Recommendation;
				 
		     	alert(recommendation);
		     	
		     	     	 
		     		document.getElementById("messageCustc").innerHTML =recommendation}); 
	        
	        var rootrefe=firebase.database().ref('nXAzrn1OC7ZU2qtold7k6frRs9v2'+'/Customer Information/').once('value').then(function(snapshot){
		       	 var recommendation=snapshot.val().Recommendation;
				 
		     	alert(recommendation);
		     	
		     	     	 
		     		document.getElementById("messageCustd").innerHTML =recommendation}); 
	     	        }	
  
	
	     	        
	 
  