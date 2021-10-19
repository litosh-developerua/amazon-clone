import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7VmPf8w7lT8ScE19aXFgDT3bqvgYBayA",
    authDomain: "fir-d9203.firebaseapp.com",
    projectId: "fir-d9203",
    storageBucket: "fir-d9203.appspot.com",
    messagingSenderId: "1002118502182",
    appId: "1:1002118502182:web:3598d3495623e2b1e9d3e7",
    measurementId: "G-BZV4KTZN9T"
  };

const fb = firebase.initializeApp(firebaseConfig)
const auth = firebase.firestore();
export { auth }