import React from "react";
import { ThoughtCard } from "./ThoughtCard";
// ThoughtList receives two props:
// - thoughts: an array of thought objects to display
// - onLike: a function that handles liking a thought
export const ThoughtList = ({ thoughts, onLike, onDelete, onEdit }) => {
  return (
    // Container for all the thought cards
    <section className="thoughts-list">
      {/* Loop through the array of thoughts and render one ThoughtCard per item */}
      {thoughts.map((item) => (
        <ThoughtCard
          key={item._id}
          message={item.message}
          hearts={item.hearts}
          createdAt={item.createdAt}
          // Pass down a function that calls onLike with the correct _id
          // This allows each ThoughtCard to like *its own* thought
          onLike={() => onLike(item._id)}
          onDelete={() => onDelete(item._id)}
          onEdit={(newMessage) => onEdit(item._id, newMessage)}
        />
      ))}
    </section>
  );
};
