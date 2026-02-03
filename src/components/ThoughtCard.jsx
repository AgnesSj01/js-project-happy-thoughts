import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//Enable Day.js plugin
dayjs.extend(relativeTime);

export const ThoughtCard = ({
  message,
  createdAt,
  hearts,
  onLike,
  onDelete,
  onEdit, //La till
}) => {
  // Convert the given timestamp into a Day.js date object
  const created = dayjs(createdAt);
  const now = dayjs();
  // Calculate how many days have passed since the thought was created
  const diffInDays = now.diff(created, "day");

  const [isEditing, setIsEditing] = useState(false);

  const [editText, setEditText] = useState(message);

  // Decide how the time should be displayed
  let displayTime;
  if (diffInDays < 7) {
    displayTime = created.fromNow();
  } else {
    displayTime = created.format("YYYY-MM-DD");
  }

  return (
    <article className="thought-card">
      {isEditing ? (
        <textarea
          className="edit-textarea"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <p>{message}</p>
      )}

      {/* Row with like button, heart count, and timestamp */}
      {!isEditing && (
        <div className="like-container">
          {/* Heart button – calls onLike when clicked */}
          <button className="like-button" onClick={onLike}>
            ❤️
          </button>

          {/* Number of hearts */}
          <span className="like-count">x {hearts}</span>
          {/* Timestamp */}
          {/* La till skräp*/}

          <span className="time-ago">{displayTime}</span>
        </div>
      )}

      {isEditing ? (
        <div className="edit-buttons">
          <button
            className="save-Button"
            onClick={() => {
              onEdit(editText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="cancel-Button"
            onClick={() => {
              setEditText(message);
              setIsEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="action-buttons">
          <button className="edit-Button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="delete-button" onClick={onDelete}>
            🗑️
          </button>
        </div>
      )}
    </article>
  );
};
