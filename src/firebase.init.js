// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAotrCpvoT_CI1tJGI7d0jz5wIXxGNlzOE",
  authDomain: "surgeon-any.firebaseapp.com",
  projectId: "surgeon-any",
  storageBucket: "surgeon-any.appspot.com",
  messagingSenderId: "333041117831",
  appId: "1:333041117831:web:e0bb8123fe309524ede622",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
