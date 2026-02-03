// Import React and two hooks:
// - useState: lets the component store and update data
// - useEffect: lets the component run code when it mounts, updates, or unmounts
import React, { useState, useEffect } from "react";

//Global Styling
import "./index.css";

//Custom components
import { ThoughtForm } from "./components/form";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { ThoughtList } from "./components/ThoughtList";
import { AuthForm } from "./components/AuthForm";

// Constants and API helper functions
import {
  getThoughts,
  postThought,
  likeThought,
  deleteThought,
  editThought, //la till
} from "./data/api";

export const App = () => {
  // State for the text inside the form input
  const [thought, setThought] = useState("");
  // State for the list of all thoughts from the API
  const [thoughts, setThoughts] = useState([]);
  // State for showing a loading spinner (true = loading)
  const [loading, setLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect runs ONCE when the App mounts (because of the empty dependency array [])
  useEffect(() => {
    const fetchThoughts = async () => {
      setLoading(true); // Show the spinner
      try {
        //All the thoughts from API
        const data = await getThoughts();
        // Save the list to state → this triggers a re-render
        setThoughts(data);
      } catch (error) {
      } finally {
        // Always hide the spinner when done (success or failure)
        setLoading(false);
      }
    };
    // Run the function when the component mounts
    fetchThoughts();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handles form submission for creating a new thought
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents page reload
    // Prevent sending an empty message
    if (thought.trim() === "") return;
    try {
      // Send the new thought to the API
      const newThoughtFromAPI = await postThought(thought);
      // Update our local list by adding the new thought to the top
      setThoughts((prevThoughts) => [newThoughtFromAPI, ...prevThoughts]);
      // Clear the text input
      setThought("");
    } catch (error) {}
  };

  // Handles clicking the heart button (liking a thought)
  const handleLike = async (id) => {
    try {
      const updatedThought = await likeThought(id);
      // Update only the thought that was changed
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === updatedThought._id ? updatedThought : thought,
        ),
      );
    } catch (error) {}
  };
  //La till
  const handleDelete = async (id) => {
    try {
      await deleteThought(id);
      setThoughts((prevThoughts) =>
        prevThoughts.filter((thought) => thought._id !== id),
      );
    } catch (error) {}
  };

  const handleEdit = async (id, newMessage) => {
    try {
      const updatedThought = await editThought(id, newMessage);
      // Update only the thought that was changed
      setThoughts((prevThoughts) =>
        prevThoughts.map((thought) =>
          thought._id === updatedThought._id ? updatedThought : thought,
        ),
      );
    } catch (error) {}
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };
  // JSX returned by the App component – this is what appears on the page
  return (
    <main>
      {isLoggedIn ? (
        <>
          <button className="logout-Button" onClick={handleLogout}>
            Log out
          </button>
          <ThoughtForm
            thought={thought}
            setThought={setThought}
            handleSubmit={handleSubmit}
          />
          {loading && <LoadingSpinner />}
          <ThoughtList
            thoughts={thoughts}
            onLike={handleLike}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </>
      ) : (
        <>
          <AuthForm onSuccess={() => setIsLoggedIn(true)} />
        </>
      )}
    </main>
  );
};
