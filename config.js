import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDlozRI-kNTgl0l_frJ_CcA0CpBGDzIYFE",
    authDomain: "waste-management-app-705f7.firebaseapp.com",
    projectId: "waste-management-app-705f7",
    storageBucket: "waste-management-app-705f7.appspot.com",
    messagingSenderId: "539459345324",
    appId: "1:539459345324:web:bb11e84c0e026991e23809",
    measurementId: "G-5LRLNK5710"
  };
  
  firebase.initializeApp(firebaseConfig);  

  export default firebase.firestore();