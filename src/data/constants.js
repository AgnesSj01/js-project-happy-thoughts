//Creates two constants (numbers)
export const MAX_THOUGHT_LENGTH = 140;
export const MIN_THOUGHT_LENGTH = 5;

//Base URL for all API request
export const API_URL = "https://happy-thoughts-api-4ful.onrender.com/thoughts";

//Creates an object containing error messages.
export const ERROR_MESSAGES = {
  empty: "Message cannot be empty.",
  tooShort: "Message must be at least 5 characters.",
  tooLong: "Message cannot be longer than 140 characters.",
};
