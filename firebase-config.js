import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbpefDdeNtdMODHk9XH4Q-FjrRIZvdSn8",
  authDomain: "estudos-mari.firebaseapp.com",
  projectId: "estudos-mari",
  storageBucket: "estudos-mari.firebasestorage.app",
  messagingSenderId: "187433835663",
  appId: "1:187433835663:web:7aa7455f28c7a499f164fa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
