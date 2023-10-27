import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCu7M7lpmCBouPZ8vZrzbwASoql7Ba9Rtk",
  authDomain: "yum-fiu.firebaseapp.com",
  projectId: "yum-fiu",
  storageBucket: "yum-fiu.appspot.com",
  messagingSenderId: "50899746152",
  appId: "1:50899746152:web:ef817eed94c3057e936add",
  measurementId: "G-MFS42QNM9C",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;