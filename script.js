document.getElementById("rsvpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    fetch("/rsvp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "RSVP submitted!") {
            alert("RSVP submitted successfully!");
            loadRSVPs(); // Reload the list of confirmed guests
        }
    })
    .catch(error => console.error("Error:", error));
});

// Load and display the list of RSVPs from the server
function loadRSVPs() {
    fetch("/rsvps")
    .then(response => response.json())
    .then(data => {
        const guestList = document.getElementById("guestList");
        guestList.innerHTML = ""; // Clear the current list
        data.forEach(rsvp => {
            const listItem = document.createElement("li");
            listItem.textContent = `${rsvp.name} - ${rsvp.email}`;
            guestList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error:", error));
}

// Load RSVPs when the page loads
window.onload = loadRSVPs;
