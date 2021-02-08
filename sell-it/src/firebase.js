import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDP5g3NVo5a4Q4bFYkx5rdvyO1EZRqCJ48",
    authDomain: "sell-it-9a549.firebaseapp.com",
    projectId: "sell-it-9a549",
    storageBucket: "sell-it-9a549.appspot.com",
    messagingSenderId: "260825441998",
    appId: "1:260825441998:web:43442db80743ba02be929f",
    measurementId: "G-KK6TMS4FD5"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};