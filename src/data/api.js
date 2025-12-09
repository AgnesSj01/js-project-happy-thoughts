// Base URL for all API requests
const API_URL = "https://happy-thoughts-api-4ful.onrender.com/thoughts";

// GET: Fetch the 20 latest thoughts
export const getThoughts = async () => {
  const res = await fetch(API_URL); // Send a GET request to the API

  if (!res.ok) {
    throw new Error("Could not fetch thoughts");
  }

  const data = await res.json();
  return data;
};

// POST: Create a new happy thought
export const postThought = async (message) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Could not post new thought");
  }

  const data = await res.json();
  return data;
};

// POST: Like a specific thought
export const likeThought = async (id) => {
  const res = await fetch(`${API_URL}/${id}/like`, {
    method: "POST",
  });

  if (!res.ok) {
    throw new Error("Could not send like");
  }

  const data = await res.json();
  return data;
};
