import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCThMz8qquhVKjm8dSNdMo54EqGNIpj-ys",
    authDomain: "storyhub-c31e2.firebaseapp.com",
    projectId: "storyhub-c31e2",
    storageBucket: "storyhub-c31e2.appspot.com",
    messagingSenderId: "10256709504",
    appId: "1:10256709504:web:0e9a531e4b7d4b6c79f365",
    measurementId: "G-Q73Z0B2TLD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()