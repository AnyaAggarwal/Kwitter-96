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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
         window.location = "kwitter.html"; 
}