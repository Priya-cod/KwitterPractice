
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDDmnUw5CyDvN8UP1d7RaKKKIvtSZjVX64",
    authDomain: "kwitter-43f7e.firebaseapp.com",
    databaseURL: "https://kwitter-43f7e-default-rtdb.firebaseio.com",
    projectId: "kwitter-43f7e",
    storageBucket: "kwitter-43f7e.appspot.com",
    messagingSenderId: "188967074060",
    appId: "1:188967074060:web:da410e2fdd8951d72db129"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding_user"
    });
}