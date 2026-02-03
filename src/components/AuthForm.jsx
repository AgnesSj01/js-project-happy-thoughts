import React, { useState } from "react";

export const AuthForm = ({ onSuccess }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isRegister
        ? "https://js-project-api-tuo0.onrender.com/users"
        : "https://js-project-api-tuo0.onrender.com/sessions";

      const body = isRegister ? { name, email, password } : { email, password };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      if (response.ok) {
        //Spara token
        localStorage.setItem("accessToken", data.accessToken);
        onSuccess();
      } else {
        //Visa fel
        setError(data.error || data.message);
      }
    } catch {
      setError("Could not connect to server");
    }
  };

  return (
    <div className="form-container1">
      <form onSubmit={handleSubmit}>
        <h2>{isRegister ? "Register" : "Login"}</h2>

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

        {isRegister && (
          <>
            <label htmlFor="fname">Name</label>

            <input
              id="fname"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name.."
            />
          </>
        )}
        <label htmlFor="femail">Email</label>
        <input
          id="femail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email.."
        />
        <label htmlFor="fpassword">Password</label>

        <input
          id="fpassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password.."
        />

        <button type="submit">{isRegister ? "Register" : "Login"}</button>

        <button
          className="question-button"
          type="button"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
};
