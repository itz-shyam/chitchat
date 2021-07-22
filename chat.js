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


  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  //document.getElementById("room_name_visible").innerHTML="You have entered Room Name " + room_name;
  
  function send() {
    msg = document.getElementById("msg").value;
   
    firebase.database().ref(room_name).push({
      name: user_name,
      message: msg,
      like: 0
      //dislike:0
    });
  
    document.getElementById("msg").value = "";
  }
  
  
  // till class 96
  
  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          console.log(firebase_message_id);
          console.log(message_data);
  
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
  
          name_with_tag = "<h3> User: "+name+"</h3>";
          message_with_tag = "<br> <h4>"+message+"</h4><br>";
  
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + 
          " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + 
          "</span></button><hr>";
  
          row = name_with_tag + 
          "<br>"+message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
  
  
  
  
          //name_with_tag = "<h4> " + name + "  " + " <img class='user_tick' src='tick.png'></h4>";
          //message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          //End code
        }
      });
    });
  }
  getData();
  
  function updateLike(message_id) {
  
    //console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    //console.log(updated_likes);
  
    firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
    });
  
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
  }