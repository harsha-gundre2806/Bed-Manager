// Password reset page with email / phone + OTP flow

import { useState } from "react";
import Notification from "../../components/common/Notification";
import "../../styles/Login.css";

export default function PasswordReset({ onSuccess }) {
  const [contact, setContact] = useState(""); // phone or email
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [notify, setNotify] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact || !otp || !newPassword || !confirmPassword) {
      setNotify("Please fill all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setNotify("Passwords do not match");
      return;
    }

    // TODO: verify OTP + update password in backend
    setNotify("Password reset successful");

    setTimeout(() => {
      onSuccess && onSuccess();
    }, 1000);
  };

  return (
    <>
      {notify && <Notification message={notify} />}

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Password Reset</h2>

          <input
            type="text"
            placeholder="Registered phone number or email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div>
    </>
  );
}
