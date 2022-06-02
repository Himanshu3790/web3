user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name

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
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();


function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(y) {
      console.log(y);
      localStorage.setItem("room_name", y);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html"
}