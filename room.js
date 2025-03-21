// room.js (Handles player page timers and call requests)

import { db } from "./firebase.js";

function initializeTimer(room) {
    const timerDisplay = document.getElementById("timer");
    const callButton = document.getElementById("call-help");
    
    // Listen for real-time timer updates from Firebase
    db.ref(`timers/${room}`).on("value", (snapshot) => {
        if (snapshot.exists()) {
            const timeLeft = snapshot.val();
            timerDisplay.textContent = formatTime(timeLeft);
        }
    });
    
    // Call for help button
    callButton.addEventListener("click", () => {
        db.ref(`calls/${room}`).transaction(count => (count || 0) + 1);
        alert("Help requested!");
    });
}

// Convert seconds to MM:SS format
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
