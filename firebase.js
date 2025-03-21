// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD790PK-Gnu7xRtmATApIQ54vhPZFWTJTc",
    authDomain: "escape-room-timer-62fb0.firebaseapp.com",
    databaseURL: "https://escape-room-timer-62fb0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "escape-room-timer-62fb0",
    storageBucket: "escape-room-timer-62fb0.firebasestorage.app",
    messagingSenderId: "331352126718",
    appId: "1:331352126718:web:e03f37aaf28c2dc9e2a1af",
    measurementId: "G-B8ZER9M2DB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export the database to use in other files
export { db };
