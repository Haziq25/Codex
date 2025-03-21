// Wait until Firebase is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Firebase configuration
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
    firebase.initializeApp(firebaseConfig);

    // Make database available globally
    window.db = firebase.database();
});
