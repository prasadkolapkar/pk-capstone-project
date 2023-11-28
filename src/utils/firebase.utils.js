import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  snapshotEqual,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA560AP3e-PYnpSlrx2Qml2RJnjidVcuZY",
  authDomain: "crwn-db-90f1e.firebaseapp.com",
  projectId: "crwn-db-90f1e",
  storageBucket: "crwn-db-90f1e.appspot.com",
  messagingSenderId: "343850671023",
  appId: "1:343850671023:web:161335c94b5ac18975ad5a",
  measurementId: "G-SBL62K8F91",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log(error);
    }
  }
};
