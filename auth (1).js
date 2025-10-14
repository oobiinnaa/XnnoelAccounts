// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrYjTGWvrSob257TtIq_PHaX4hM0EEqDw",
  authDomain: "hellofeen-b2d44.firebaseapp.com",
  projectId: "hellofeen-b2d44",
  storageBucket: "hellofeen-b2d44.firebasestorage.app",
  messagingSenderId: "942758072679",
  appId: "1:942758072679:web:2252b50126dfdf4586dfc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged, signOut };
