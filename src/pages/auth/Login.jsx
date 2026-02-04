// Login page for all user roles (admin/staff/patient) with phone/password

import { useState } from "react";
import Notification from "../../components/common/Notification";
import "../../styles/Login.css";

export default function Login({ onSuccess }) {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [notify, setNotify] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!number || !password) {
      setNotify("Please enter phone number and password");
      return;
    }

    console.log("Number:", number);
    console.log("Password:", password);

    setNotify("Login successful");

    setTimeout(() => {
      onSuccess && onSuccess();
    }, 1000);
  };

  return (
    <>
      {notify && <Notification message={notify} />}

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <input
            type="tel"
            placeholder="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
