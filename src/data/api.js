// Base URL for all API requests
const API_URL = "https://js-project-api-tuo0.onrender.com/thoughts";

//"https://happy-thoughts-api-4ful.onrender.com/thoughts"
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
  const token = localStorage.getItem("accessToken");

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error("Could not post new thought");
  }

  const data = await res.json();
  return data;
};

//Uppdatera/Edit tanke
export const editThought = async (id, newMessage) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${API_URL}/${id}/update`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify({ message: newMessage }),
  });

  if (!res.ok) {
    throw new Error("Could not edit thought");
  }

  const data = await res.json();
  return data;
};

// Ändrar så den kopplas till backend med method: PATCH
export const likeThought = async (id) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { Authorization: token },
  });

  if (!res.ok) {
    throw new Error("Could not send like");
  }

  const data = await res.json();
  return data;
};
//Lägger till en delete som kopplas till backend med metod "Deleete"
export const deleteThought = async (id) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });

  if (!res.ok) {
    throw new Error("Could not delete thought");
  }

  return true;
};
