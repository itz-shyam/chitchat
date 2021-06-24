
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAtKiMql59YIKMcl4kqN68IWERT6ye9jDk",
    authDomain: "dhjdty-viwgbc.firebaseapp.com",
    databaseURL: "https://dhjdty-viwgbc.firebaseio.com",
    projectId: "dhjdty-viwgbc",
    storageBucket: "dhjdty-viwgbc.appspot.com",
    messagingSenderId: "936744484954",
    appId: "1:936744484954:web:52b1b5357aae74bc699863",
    measurementId: "G-R0JNG8NHN0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
