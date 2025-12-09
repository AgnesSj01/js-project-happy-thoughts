import React from "react";

//A loading spinner displayed while the page loads
export const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div id="loader"></div>
      <p>Loading…</p>
    </div>
  );
};
