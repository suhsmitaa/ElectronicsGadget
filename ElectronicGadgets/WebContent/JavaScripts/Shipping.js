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
  
  function submitt(){
	  //alert("checking");
	  var uIdd=firebase.auth().currentUser.uid;
		//alert(uIdd);
		
		 var nameCustomer=document.getElementById("name").value;
		 
		// alert(nameCustomer);
			var addCustomer=document.getElementById("address").value;
			//alert(addCustomer);
			var emailCustomer=document.getElementById("email").value;
			
			//alert(emailCustomer);
				var phoneCustomer=document.getElementById("phone").value;
				
				//alert(phoneCustomer);
					var recomendation=document.getElementById("subject").value;
					
					//alert(recomendation);
			 firebase.database().ref(uIdd).child("Customer Information").set({
				  Name :nameCustomer,
				  Address :addCustomer,
				  Email :emailCustomer,
				  Phone :phoneCustomer,
				  Recommendation:recomendation
				  
			 });
			 
			 alert("Shipping address added");
			 getdata();
			  
  }
  
  function getdata(){
	  
	  var uIdd=firebase.auth().currentUser.uid;
		
		 
		 var rootref=firebase.database().ref().child(uIdd);
		 rootref.on("child_added", snap => {
			 
			 var name=snap.child("Name").val();
			 var address=snap.child("Address").val();
			 var email=snap.child("Email").val();
			 var phone=snap.child("Phone").val();
			 
			 alert(name+" /n "+address+" /n "+email+" /n "+phone);
			 
		 });
		
  }
  
  