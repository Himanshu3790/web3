//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCgUTrziJFV6Z4EZkPTK52MHTRVuZCXSHM",
      authDomain: "web-chat-17658.firebaseapp.com",
      databaseURL: "https://web-chat-17658-default-rtdb.firebaseio.com",
      projectId: "web-chat-17658",
      storageBucket: "web-chat-17658.appspot.com",
      messagingSenderId: "83004536227",
      appId: "1:83004536227:web:bc5dc5e1dce143ab03d616",
      measurementId: "G-9B7NES4JMK"


};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name: user_name,
           message: msg,
           likes:0
      });
      document.getElementById("msg").value="";
      
}

