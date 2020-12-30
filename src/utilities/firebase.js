import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGuQIAABZwDI3j-lb9_RUFicZg-4wHiBk",
  authDomain: "vue-3-learning.firebaseapp.com",
  projectId: "vue-3-learning",
  storageBucket: "vue-3-learning.appspot.com",
  messagingSenderId: "181979609127",
  appId: "1:181979609127:web:ee83bc3c91ed31c6f17602"
};

firebase.initializeApp(firebaseConfig);

export  default firebase;
