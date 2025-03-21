document.addEventListener("DOMContentLoaded", function () {
    if (!window.db) {
        console.error("Firebase database not initialized!");
        return;
    }

    const roomId = new URLSearchParams(window.location.search).get("room");
    if (!roomId) {
        console.error("No room ID provided in URL.");
        return;
    }

    const timerElement = document.getElementById("timer");

    function updateTimer(snapshot) {
        const data = snapshot.val();
        if (data && data.timeRemaining !== undefined) {
            timerElement.textContent = data.timeRemaining;
        }
    }

    db.ref(`rooms/${roomId}`).on("value", updateTimer);
});
