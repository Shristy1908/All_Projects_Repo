// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZJhfCdQ2UDVdpCYVGrIMfV2P2464PYlE",
  authDomain: "blogging-app-f4b37.firebaseapp.com",
  projectId: "blogging-app-f4b37",
  storageBucket: "blogging-app-f4b37.appspot.com",
  messagingSenderId: "24104590792",
  appId: "1:24104590792:web:4a94dda7938c2871d234fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);