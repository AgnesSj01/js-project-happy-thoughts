import React, { useState, useEffect } from "react";
import { getRandomThought } from "../data/api";
import { ThoughtCard } from "./ThoughtCard";

export const RandomThought = ({ isLoggedIn, onLike }) => {
  const [randomThought, setRandomThought] = useState(null);

  const fetchRandom = async () => {
    try {
      const thought = await getRandomThought();
      setRandomThought(thought);
    } catch (error) {
      console.error(error);
    }
  };

  // Hämta en random thought direkt när komponenten visas
  useEffect(() => {
    fetchRandom();
  }, []);

  return (
    <div className="random-thought-section">
      {randomThought && (
        <ThoughtCard
          message={randomThought.message}
          hearts={randomThought.hearts}
          createdAt={randomThought.createdAt}
          onLike={() => onLike && onLike(randomThought._id)}
          onDelete={() => {}}
          onEdit={() => {}}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
};
