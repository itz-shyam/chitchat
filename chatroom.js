var firebaseConfig = {
    apiKey: "AIzaSyAtKiMql59YIKMcl4kqN68IWERT6ye9jDk",
    authDomain: "dhjdty-viwgbc.firebaseapp.com",
    databaseURL: "https://dhjdty-viwgbc.firebaseio.com",
    projectId: "dhjdty-viwgbc",
    storageBucket: "dhjdty-viwgbc.appspot.com",
    messagingSenderId: "936744484954",
    appId: "1:936744484954:web:52b1b5357aae74bc699863",
    measurementId: "G-R0JNG8NHN0",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name;
  
  
  function addRoom() {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
    window.location ="chatroom.html";
  }
  
  