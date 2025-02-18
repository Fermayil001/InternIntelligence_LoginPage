// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import Swal from "sweetalert2";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAskjtPbKnPhGo_ScawINcfBfVV00W9ueM",
  authDomain: "login-page-d70ca.firebaseapp.com",
  projectId: "login-page-d70ca",
  storageBucket: "login-page-d70ca.firebasestorage.app",
  messagingSenderId: "815515111636",
  appId: "1:815515111636:web:a2fc961a528f76d0fe6b41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const signUp = async (email: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    Swal.fire('Success', 'You are registered successfully!', 'success')
    return user;
  } catch (error: any) {
    const errorMessage = error?.message
    Swal.fire('Error', `${errorMessage}`, 'error')
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    Swal.fire('Success', 'You are logged in successfully!', 'success')
    return user;
  } catch (error: any) {
    const errorMessage = error?.message
    Swal.fire('Error', `${errorMessage}`, 'error')
  }
}


export const handleSignOut = async () => {
  try {
    await signOut(auth)
    Swal.fire('Success', 'You are logged in successfully!', 'success')
    return true;
  } catch (error: any) {
    const errorMessage = error?.message
    Swal.fire('Error', `${errorMessage}`, 'error')
  }
}




export default app;