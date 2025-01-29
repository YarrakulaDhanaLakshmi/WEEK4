const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const DATA_FILE = path.join(__dirname, 'data.json');
let rsvpList = [];

// Read existing data from data.json if it exists
if (fs.existsSync(DATA_FILE)) {
    rsvpList = JSON.parse(fs.readFileSync(DATA_FILE));
}

// Update the static files path to point to the correct frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend'))); // Notice the '..' to go up one level

app.use(express.json());

// Serve the frontend index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html')); // Update the path to frontend/index.html
});

// Endpoint to submit RSVP data
app.post("/rsvp", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newRSVP = { name, email };
    rsvpList.push(newRSVP);

    // Save updated data to data.json
    fs.writeFileSync(DATA_FILE, JSON.stringify(rsvpList, null, 2));

    res.json({ message: "RSVP submitted!", rsvp: newRSVP });
});

// Endpoint to view RSVPs
app.get("/rsvps", (req, res) => {
    res.json(rsvpList);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
