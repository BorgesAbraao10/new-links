import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgfBALVjEfvUBCVovJqk2Ldbee3PS4lTs",
  authDomain: "reactlinks-13653.firebaseapp.com",
  projectId: "reactlinks-13653",
  storageBucket: "reactlinks-13653.appspot.com",
  messagingSenderId: "887963041428",
  appId: "1:887963041428:web:3e99438e2bea7f9c21fe81",
  measurementId: "G-TLVTRE9CXT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
