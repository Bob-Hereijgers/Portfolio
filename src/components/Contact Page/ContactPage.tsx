import React, { useState } from "react";

const ContactPage = () => {
  return <ContactForm />;
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = () => {
    alert(`Thank you for sending your message ${name}!`);
    console.log(`(Mock email)  ${name}:"${message}" from ${email}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="ContactContainer">
      <form className="Contact">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>Message</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <input value="Send" type="button" onClick={Submit} />
      </form>
    </div>
  );
};

export default ContactPage;
