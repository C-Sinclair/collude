import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/firebase-auth";
import "firebase/firebase-functions";
import "firebase/firebase-storage";

const config = {
  apiKey: "AIzaSyBS4knvsDCJW7SrEYtASM87ZHBCXDKeQk0",
  authDomain: "collude-db0e7.firebaseapp.com",
  projectId: "collude",
  storageBucket: "collude.appspot.com",
  messagingSenderId: "682339092578",
  appId: "1:682339092578:web:c7f952eca7d1075936e93b",
};

firebase.initializeApp(config);

const Firestore = firebase.firestore();
const Auth = firebase.auth();
const Functions = firebase.app().functions("europe-west1");
const Storage = firebase.storage();

export { Firestore, Auth, Functions, Storage };
