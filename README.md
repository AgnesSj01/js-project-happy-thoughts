Happy Thoughts – React Project (Technigo)

A React-based “Happy Thoughts” application built as part of a Technigo assignment. The app allows users to post uplifting messages and send hearts (likes) to others’ thoughts. All data is stored and fetched from a shared public API.

Features:
Post new happy thoughts (5–140 characters)
Fetch and display the 20 most recent thoughts
Send likes to individual thoughts
Real-time UI updates after submitting or liking a thought
Loading states and error handling (optional stretch goals)

What I Learned:
How to use React component lifecycle and the useEffect hook
Managing state and controlled forms in React
Integrating a frontend with an external REST API
Handling POST requests and updating the UI based on API responses
Working with tools like Postman for testing endpoints

API Endpoints:

Get recent thoughts:
GET https://happy-thoughts-api-4ful.onrender.com/thoughts

Post a new thought:
POST https://happy-thoughts-api-4ful.onrender.com/thoughts

Like a thought:
POST https://happy-thoughts-api-4ful.onrender.com/thoughts/:THOUGHT_ID/like

Technologies Used:
-React
-JavaScript
-Fetch API
-CSS/Tailwind/Styled Components (anpassa beroende på vad du använde)

Installation:
-Clone the project and install dependencies:
-git clone <your-repo-url>
-cd happy-thoughts
-npm install
-npm start


This project was created as part of the Technigo Frontend Bootcamp.
