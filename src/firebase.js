import firebase from 'firebase';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAfjciCy8EZVD6ukk8VQvZxB_cSr25bda0",
    authDomain: "signup-db5ba.firebaseapp.com",
    projectId: "signup-db5ba",
    storageBucket: "signup-db5ba.appspot.com",
    messagingSenderId: "986661221911",
    appId: "1:986661221911:web:b4c0e7926e0b6fb869ce52"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;