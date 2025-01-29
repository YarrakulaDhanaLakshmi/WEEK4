# Event RSVP and Invitation Management System

## Overview

I’ve built this **Event RSVP and Invitation Management System** to help organize events by handling RSVPs efficiently. This app allows guests to confirm their attendance by submitting their details, while event organizers can manage and track all RSVPs in one place. It’s super simple to use, and I created it with both ease and functionality in mind.

## Features

- **Submit an RSVP**: Guests can enter their name and email to RSVP for an event.
- **Track RSVPs**: Event organizers can view all RSVP submissions in one place.
- **Validation**: Ensures all required fields (name and email) are filled out before submitting the form.
- **Responsive Design**: The app is designed to look great on any screen size, so it works well on both mobile and desktop.
- **Simple Interface**: Everything you need is easy to find, whether you're a guest submitting your RSVP or an organizer tracking responses.

## Tech Stack

I’ve used the following technologies to build this:

- **Frontend**:
  - **HTML** and **CSS** for structure and styling.
  - **JavaScript** (Vanilla) for dynamic behavior.
  - Optionally, you can use **Bootstrap** or **Tailwind CSS** for quicker styling and responsiveness.
  
- **Backend**:
  - **Node.js** with **Express.js** for creating the API to handle RSVP submissions.
  - **fs module** to read and write RSVP data to a local `data.json` file (this is for simplicity; you can switch to a database if needed).

## Files Included

- **`server.js`**: The backend server that handles RSVP submissions and serves the frontend files.
- **`frontend/`**: This folder contains everything needed for the frontend (HTML, CSS, JS files).
  - **`index.html`**: The main page where users can submit their RSVP.
  - **`style.css`**: Custom styles for the user interface.
  - **`app.js`**: JavaScript file handling form submission, validation, and dynamic updates.
- **`data.json`**: A simple file where RSVP data is saved. (This can easily be replaced by a real database.)

## How to Use

### 1. Clone the Repository

If you want to try this out, first clone the repository:


git clone https://github.com/yourusername/event-rsvp-system.git


### 2. Install Dependencies

Next, navigate to the project folder and install the dependencies for the backend:


cd event-rsvp-system
npm install


### 3. Run the Server

Start the server by running this command:


node server.js


This will start the backend at `http://localhost:3000`.

### 4. Open the App

To interact with the system, open the **`frontend/index.html`** file in a web browser. You’ll be able to submit RSVPs from the landing page.

### 5. Submit an RSVP

- Enter your name and email, then click the “Submit RSVP” button.
- The page will confirm that your RSVP was successfully submitted.

### 6. View RSVPs (for Event Organizers)

As an event organizer, you can view the list of RSVPs submitted by guests. You can see the data by visiting the `/rsvps` endpoint in your browser (e.g., `http://localhost:3000/rsvps`).

## Code Structure

Here’s how I’ve structured the code:

### Backend (`server.js`)

1. **RSVP Submission**:
   - When a guest submits their RSVP, the backend checks if the name and email are filled out.
   - If everything is good, it stores the data in `data.json`.

2. **RSVP List**:
   - When an organizer wants to see all RSVPs, the backend sends the data stored in `data.json`.

3. **Serving Files**:
   - The backend serves the frontend files (HTML, CSS, JS) from the `frontend` folder.

### Frontend (`frontend/`)

1. **HTML**:
   - **`index.html`**: This is where users can fill out their RSVP information (name and email).
   
2. **CSS**:
   - The styles are in `style.css`, and the design is simple but modern.
   - I used basic CSS for responsiveness, so the app adjusts well across devices.

3. **JavaScript**:
   - Handles the form submission and validation. It also communicates with the backend (sending RSVP data and receiving success/failure messages).
   - It dynamically updates the interface, such as showing a success message after submitting the form.

## Customization

### 1. Changing Event Details

If you need to customize the event (e.g., change the event name or details), just modify the HTML file (`index.html`). You can easily update the text in the event description.

### 2. Use a Database (Optional)

Currently, RSVP data is saved in a `data.json` file for simplicity. If you want to scale this, I recommend using a real database like **MongoDB** or **MySQL**. You can modify the backend (`server.js`) to connect to a database instead of writing to a file.

### 3. Add Features

Here are some ideas to extend the functionality:
- **Email Invitations**: Automatically send out invites when a user submits an RSVP.
- **Admin Dashboard**: A special page for organizers to view RSVPs more easily.
- **Event Reminders**: Send email reminders about the event as the date gets closer.
- **Guest Capacity**: Add a feature to limit RSVPs after reaching the maximum number of guests.

## Browser Compatibility

This app works in all modern browsers, including:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Future Enhancements

- **Multiple Event Support**: Allow users to RSVP for different events.
- **User Accounts**: Enable guests to create accounts and manage their RSVPs.
- **Event Search**: Implement a search feature to let users browse for events.
- **Admin Panel**: Enhance the admin panel to manage and track RSVPs for multiple events.

### Key Points:
1. **Single-File README**: This README is now presented in a straightforward, easy-to-read format that covers everything related to your project.
2. **Clear Instructions**: All the steps from setup to usage are simplified and clearly explained.
3. **Personal, Direct Tone**: The instructions and details are shared as if you are directly talking to someone using the system.


## License

This project is open-source under the MIT License. Feel free to modify and distribute it as you like!
YARRAKULA DHANA LAKSHMI
yarrakuladhanalakshmi@gmail.com

