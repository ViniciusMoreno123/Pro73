import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {

    apiKey: "AIzaSyCRiW13uGl1auHmvnzdnKQfAfprVZXAq-k",
    authDomain: "pro71-928b3.firebaseapp.com",
    projectId: "pro71-928b3",
    storageBucket: "pro71-928b3.appspot.com",
    messagingSenderId: "251775107701",
    appId: "1:251775107701:web:b8ff371b500de0569dae3c"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
