// Load Firebase SDK from CDN
const firebaseConfig = {
    apiKey: "AIzaSyD790PK-Gnu7xRtmATApIQ54vhPZFWTJTc",
    authDomain: "escape-room-timer-62fb0.firebaseapp.com",
    databaseURL: "https://escape-room-timer-62fb0-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "escape-room-timer-62fb0",
    storageBucket: "escape-room-timer-62fb0.appspot.com",
    messagingSenderId: "331352126718",
    appId: "1:331352126718:web:e03f37aaf28c2dc9e2a1af",
    measurementId: "G-B8ZER9M2DB"
};

// Load Firebase scripts dynamically
const script1 = document.createElement("script");
script1.src = "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
script1.onload = () => {
    const script2 = document.createElement("script");
    script2.src = "https://www.gstatic.com/firebasejs/11.5.0/firebase-database.js";
    script2.onload = () => {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        window.db = firebase.database();
        console.log("Firebase initialized successfully.");
    };
    document.body.appendChild(script2);
};
document.body.appendChild(script1);
