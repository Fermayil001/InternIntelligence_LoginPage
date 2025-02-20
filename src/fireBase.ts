import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import Swal from "sweetalert2";


const firebaseConfig = {
  apiKey: "AIzaSyAskjtPbKnPhGo_ScawINcfBfVV00W9ueM",
  authDomain: "login-page-d70ca.firebaseapp.com",
  projectId: "login-page-d70ca",
  storageBucket: "login-page-d70ca.firebasestorage.app",
  messagingSenderId: "815515111636",
  appId: "1:815515111636:web:a2fc961a528f76d0fe6b41"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const user = getAuth().currentUser;

export const signUp = async (email: string, password: string) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user;
  } catch (error: any) {
    const errorMessage = error?.message
    Swal.fire('Error', `${errorMessage}`, 'error')
  }
}

export const signIn = async (email: string, password: string) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
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

export const handleResetPassword = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email)
    return true;
  } catch (error: any) {
    
  }
}


export default app;