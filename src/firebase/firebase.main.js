import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJqkG5DA7ETUxKrZsUQSXXt13ALeDAyV4",
  authDomain: "acuerdo-7b3c2.firebaseapp.com",
  databaseURL: "https://acuerdo-7b3c2.firebaseio.com",
  projectId: "acuerdo-7b3c2",
  storageBucket: "acuerdo-7b3c2.appspot.com",
  messagingSenderId: "34836863042",
  appId: "1:34836863042:web:8c625b8032351e17c7b5db",
  measurementId: "G-QXRSMZCDGE",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
export { firebase, firestore, storage, auth };
