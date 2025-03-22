<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const analytics = getAnalytics(app);
</script>
