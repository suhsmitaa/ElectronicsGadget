



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

  
  
   function shippingAdd(){
	   window.location.replace('ShippingInfo.html');
   }
 
  function insertInfoIphone(){
	  
	
	  
	  var uIdd=firebase.auth().currentUser.uid;
	  var phBrand=document.getElementById("brandIphone").textContent;
		var phPrice=document.getElementById("priceIphone").textContent;
	
	 firebase.database().ref(uIdd).child(phBrand).set({
		 Phone_Brand :phBrand,
		  Phone_price :phPrice
	 });
		  
	//alert("La congratz,chalyo,now go for short nap of 2,3 hour");
	 
	 alert("Added to cart");
	
	 getData();
	 
	 
		};
		
function getData(){
			
			 var uIdd=firebase.auth().currentUser.uid;
		
			 
			 var rootref=firebase.database().ref().child(uIdd);
			 rootref.on("child_added", snap => {
				 
				 var ph_name=snap.child("Phone_Brand").val();
				 var ph_price=snap.child("Phone_price").val();
				 
				 $("#table_body").append("<tr><td>" +ph_name + "</td><td>" +ph_price+ "</td><td><button onclick=removedata()>REMOVE</button></td></tr>");
			 });
	
	
			
		};

function removedata() { 
	//alert("checking");
	var uIdd=firebase.auth().currentUser.uid;
	 var phBrand=document.getElementById("brandIphone").textContent;
	 
	 var rIndex,
	 table=document.getElementById("table_body");
	 
	
	// alert(rIndex);
	
	 for(var i=0;i<table.rows.length;i++)
	 {
		// alert("checking");
		table.rows[i].cells[2].onclick = function(){
			 //alert(rows[i].cells[0].value);
			 //alert("checking");
			 rIndex=((this.parentElement.rowIndex)-1);
			//alert(rIndex);
			//alert("hey");
			//alert(phBrand);
			
			 table.deleteRow(rIndex);
			 
			// var phname=this.cells[0].innerHTML;
				var currentRow= $(this).closest('tr');
				var phname=currentRow.find('td:eq(0)').text();
			 alert("You deletetd " +phname);
			
			 var rootref=firebase.database().ref().child(uIdd+"/"+phname);
			 //var rootref=firebase.database().ref().child(uIdd+"/Huwaei");
			 
			 
			 rootref.remove().then(function(){
				 alert("Deleted")
				 
			 }).catch(function(error){
				 alert("Cannot deleted");
			 })
			
			 
			
		 }
	 }
		//var phname=this.cells[0].innerHTML;
		//this.cells[0].innerHTML;
	 //alert("check");
	 //table.deleteRow(rIndex);
	

	

};
 function insertInfoSamsung(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
			  
			
				 var phBrand=document.getElementById("brandSamsung").textContent;
					var phPrice=document.getElementById("priceSamsung").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
  
		  
 function insertInfoSamsungs6(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
		
			
				 var phBrand=document.getElementById("brandSamsungs6").textContent;
					var phPrice=document.getElementById("priceSamsungs6").textContent;
					 firebase.database().ref(uIdd).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
		  
 function insertInfoSamsungs10(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
			  
				 var phBrand=document.getElementById("brandSamsungs10").textContent;
					var phPrice=document.getElementById("priceSamsungs10").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };

		  
function insertInfoHuwaei(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
			 
			
				 var phBrand=document.getElementById("brandHuwaei").textContent;
					var phPrice=document.getElementById("priceHuwaei").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
		  
function insertInfoxiaomi(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
		
			
				 var phBrand=document.getElementById("brandxiaomi").textContent;
					var phPrice=document.getElementById("pricexiaomi").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 
					 alert("Added to cart");
					 getData();
		  };
		  
		  
function insertInfoBlackberry(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
			 
			
				 var phBrand=document.getElementById("brandBlackberry").textContent;
					var phPrice=document.getElementById("priceBlackberry").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
		  
function insertInforedmi(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
		
			
				 var phBrand=document.getElementById("brandredmi").textContent;
					var phPrice=document.getElementById("priceredmi").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
		  
function insertInfoNokia(){
			  
			  var uIdd=firebase.auth().currentUser.uid;
		
			
				 var phBrand=document.getElementById("brandNokia").textContent;
					var phPrice=document.getElementById("priceNokia").textContent;
					 firebase.database().ref(uIdd).child(phBrand).set({
						  Phone_Brand :phBrand,
						  Phone_price :phPrice
						
						  
					 });
					 
					 alert("Added to cart");
					 getData();
		  };
		  
