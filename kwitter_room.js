
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCiuF5zpMjs6Rgt4I-l4e_VuwoU5Z2C8-c",
      authDomain: "class-text-9e2d9.firebaseapp.com",
      databaseURL: "https://class-text-9e2d9-default-rtdb.firebaseio.com",
      projectId: "class-text-9e2d9",
      storageBucket: "class-text-9e2d9.appspot.com",
      messagingSenderId: "797897959199",
      appId: "1:797897959199:web:163e81d77e98983842322a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

    function addRoom()
          {
                room_name = document.getElementById("room_name").ariaValueMax;

                firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
                });

                localStorage.setItem("room_name", room_name);

                window.location = "kwitter_page.html";
          }
    
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"<div><hr>";
      document.getElementById("output").innerHTML += row;
    });
});
    }
    getData();



      

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}