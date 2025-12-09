import React, { useState } from "react";

import {
  MAX_THOUGHT_LENGTH,
  MIN_THOUGHT_LENGTH,
  ERROR_MESSAGES,
} from "../data/constants";

// ThoughtForm receives three props from App:
// - thought: the current text inside the textarea
// - setThought: function to update the textarea value
// - handleSubmit: function from App that sends the POST request
export const ThoughtForm = ({ thought, setThought, handleSubmit }) => {
  // Local state for showing validation error messages
  const [error, setError] = useState("");

  // This function runs when the user submits the form
  const handleLocalSubmit = (event) => {
    event.preventDefault(); // Stop page reload

    // VALIDATION CHECKS
    // 1. Empty text (after trimming spaces)
    if (thought.trim().length === 0) {
      setError(ERROR_MESSAGES.empty);
      return;
    }

    // 2. Too short
    if (thought.trim().length < MIN_THOUGHT_LENGTH) {
      setError(ERROR_MESSAGES.tooShort);
      return;
    }

    // 3. Too long
    if (thought.length > MAX_THOUGHT_LENGTH) {
      setError(ERROR_MESSAGES.tooLong);
      return;
    }

    // If everything is OK, clear errors
    setError("");

    // Call App's submit function to actually post the thought
    handleSubmit(event);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleLocalSubmit}>
        <h2>What is making you happy right now?</h2>

        {/* Controlled textarea:
            - value comes from App.jsx
            - onChange updates the "thought" state in App
        */}
        <textarea
          rows="4"
          value={thought}
          onChange={(event) => {
            setThought(event.target.value);
            setError(""); // Clear error when user starts typing again
          }}
        />

        {/* Character counter with color feedback */}
        <p
          style={{
            color: thought.length > MAX_THOUGHT_LENGTH ? "red" : "gray",
            fontSize: "12px",
          }}
        >
          {MAX_THOUGHT_LENGTH - thought.length} characters remaining
        </p>

        {/* Show error message only if error has text */}
        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

        <button type="submit">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  );
};
