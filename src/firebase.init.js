// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKqYTc2OakiTKEZDqVs_Ap2e5b90zymI8",
    authDomain: "tony-sparkes.firebaseapp.com",
    projectId: "tony-sparkes",
    storageBucket: "tony-sparkes.appspot.com",
    messagingSenderId: "402392467895",
    appId: "1:402392467895:web:5a30b2969b11750c6a0032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;