document.addEventListener("DOMContentLoaded", function () {
    function initRoom() {
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
    }

    setTimeout(initRoom, 2000); // Delay to wait for Firebase to initialize
});

