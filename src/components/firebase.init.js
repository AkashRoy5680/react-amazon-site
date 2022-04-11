// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm9o4JWrH3OWWoCWlnveJDN8FBu49ir_M",
  authDomain: "ema-jhon-simple-7453a.firebaseapp.com",
  projectId: "ema-jhon-simple-7453a",
  storageBucket: "ema-jhon-simple-7453a.appspot.com",
  messagingSenderId: "354135057829",
  appId: "1:354135057829:web:fdf47ef8892e68c009f44c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;