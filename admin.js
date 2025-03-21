document.addEventListener("DOMContentLoaded", function () {
    if (!window.db) {
        console.error("Firebase database not initialized!");
        return;
    }

    const roomsRef = db.ref("rooms");

    function updateTimers() {
        roomsRef.once("value", (snapshot) => {
            const rooms = snapshot.val();
            if (!rooms) return;

            Object.keys(rooms).forEach((room) => {
                const timerElement = document.getElementById(`timer-${room}`);
                if (timerElement) {
                    timerElement.textContent = rooms[room].timeRemaining;
                }
            });
        });
    }

    function setRoomTime(room, timeInSeconds) {
        db.ref(`rooms/${room}`).update({ timeRemaining: timeInSeconds });
    }

    function resetRoom(room) {
        db.ref(`rooms/${room}`).update({ timeRemaining: 3600 }); // Default to 1 hour
    }

    function stopRoom(room) {
        db.ref(`rooms/${room}`).update({ paused: true });
    }

    roomsRef.on("value", updateTimers);

    document.getElementById("reset-room-1").addEventListener("click", () => resetRoom("room1"));
    document.getElementById("reset-room-2").addEventListener("click", () => resetRoom("room2"));
    document.getElementById("reset-room-3").addEventListener("click", () => resetRoom("room3"));

    document.getElementById("stop-room-1").addEventListener("click", () => stopRoom("room1"));
    document.getElementById("stop-room-2").addEventListener("click", () => stopRoom("room2"));
    document.getElementById("stop-room-3").addEventListener("click", () => stopRoom("room3"));
});

}
