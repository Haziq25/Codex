// admin.js (Handles admin panel functionality)

function updateTimers() {
    ["room1", "room2", "room3"].forEach(room => {
        db.ref(`timers/${room}`).on("value", (snapshot) => {
            if (snapshot.exists()) {
                document.getElementById(`time-${room}`).textContent = formatTime(snapshot.val());
            }
        });
    });
}

function resetTimer(room) {
    db.ref(`timers/${room}`).set(0);
}

function stopTimer(room) {
    db.ref(`timers/${room}`).set(null);
}

function setTime(room) {
    const minutes = document.getElementById(`set-time-${room}`).value;
    if (minutes) {
        db.ref(`timers/${room}`).set(minutes * 60);
    }
}

function updateCallRequests() {
    ["room1", "room2", "room3"].forEach(room => {
        db.ref(`calls/${room}`).on("value", (snapshot) => {
            document.getElementById(`call-${room}`).textContent = snapshot.exists() ? snapshot.val() : 0;
        });
    });
}

function generateQRCodes() {
    const qrContainer = document.getElementById("qrCodes");
    ["room1", "room2", "room3"].forEach(room => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${room.toUpperCase()}</h3><div id='qr-${room}'></div>`;
        qrContainer.appendChild(div);
        new QRCode(document.getElementById(`qr-${room}`), window.location.origin + `/${room}.html`);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimers();
    updateCallRequests();
    generateQRCodes();
});

// Helper function for formatting time
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
