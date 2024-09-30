// Import the functions you need from the SDKs you need
"use client";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { singninuser } from "../store/userslice";
import { helperfunction } from "../assests/helperfunction";

// providers
const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx-bGTqRySu7yi7B60zFvPwP85NgjfmTw",
  authDomain: "smithluxury-636cf.firebaseapp.com",
  projectId: "smithluxury-636cf",
  storageBucket: "smithluxury-636cf.appspot.com",
  messagingSenderId: "1036283355623",
  appId: "1:1036283355623:web:3e48145c81839905e79d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUpWiithGooglePopUp = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Return user details
    return {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
    throw error; // Re-throw the error so it can be handled where this function is called
  }
};

export const signoutaccount = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
