import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8Neq9DypsU8h77_ZYFBaRctUQAgTrEx0",
  authDomain: "whatsapp-clone-8dcff.firebaseapp.com",
  projectId: "whatsapp-clone-8dcff",
  storageBucket: "whatsapp-clone-8dcff.appspot.com",
  messagingSenderId: "32775807458",
  appId: "1:32775807458:web:8c77265156b222d26659bb",
  measurementId: "G-ZKBWXD7E9Q",
};

const app= firebase.initializeApp(firebaseConfig);

const auth= firebase.auth();

const db= app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export {auth, googleProvider}

export default db;
