import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf9lgTbR3vJTPQHYeXhodrY1Blat9lbc4",
  authDomain: "whatsappclone-bfb56.firebaseapp.com",
  projectId: "whatsappclone-bfb56",
  storageBucket: "whatsappclone-bfb56.appspot.com",
  messagingSenderId: "884945802725",
  appId: "1:884945802725:web:f5346b99f7d011bd3bcb0c",
  measurementId: "G-394CDF260X"
};

  const app =firebase.initializeApp(firebaseConfig)

  const auth =firebase.auth();

  const db =app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth , googleProvider}

  export default db;
