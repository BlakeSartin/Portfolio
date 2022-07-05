import React, { useState } from "react";
import "./Contact.scss";
import { ContactMail } from "@material-ui/icons";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <ContactMail className="img" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder='"Message'></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll be in contact ASAP!</span>}
        </form>
      </div>
    </div>
  );
}
