import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//Enable Day.js plugin
dayjs.extend(relativeTime);

export const ThoughtCard = ({ message, createdAt, hearts, onLike }) => {
  // Convert the given timestamp into a Day.js date object
  const created = dayjs(createdAt);
  const now = dayjs();
  // Calculate how many days have passed since the thought was created
  const diffInDays = now.diff(created, "day");

  // Decide how the time should be displayed
  let displayTime;
  if (diffInDays < 7) {
    displayTime = created.fromNow();
  } else {
    displayTime = created.format("YYYY-MM-DD");
  }

  return (
    <article className="thought-card">
      {/* The thought text */}
      <p>{message}</p>

      {/* Row with like button, heart count, and timestamp */}
      <div className="like-container">
        {/* Heart button – calls onLike when clicked */}
        <button className="like-button" onClick={onLike}>
          ❤️
        </button>
        {/* Number of hearts */}
        <span className="like-count">x {hearts}</span>
        {/* Timestamp */}
        <span className="time-ago">{displayTime}</span>
      </div>
    </article>
  );
};
