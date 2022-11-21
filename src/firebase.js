import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAre0PEFLtFDNLYXzv_l8T-K6yN_9raPX4",
  authDomain: "swipe-44bf3.firebaseapp.com",
  projectId: "swipe-44bf3",
  storageBucket: "swipe-44bf3.appspot.com",
  messagingSenderId: "415630525977",
  appId: "1:415630525977:web:37278ebe32f563dc5dcc88",
  measurementId: "G-MY1ZBW8N3B",
  databaseURL: "https://swipe-44bf3-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);