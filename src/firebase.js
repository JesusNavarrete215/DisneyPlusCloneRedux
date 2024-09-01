import firebase from "firebase"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXoI9YuzpIWsJUyAXLWvq0FPGKkGUYH10",
  authDomain: "disneyplus-clone-redux-cb83c.firebaseapp.com",
  projectId: "disneyplus-clone-redux-cb83c",
  storageBucket: "disneyplus-clone-redux-cb83c.appspot.com",
  messagingSenderId: "356571201533",
  appId: "1:356571201533:web:be70b63c938a53bee5a394",
  measurementId: "G-L3WYGXY8RP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth, provider, storage}
export default db; 