import React, { useState } from "react";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFirstName(event.target.value);
  };
  const handleChange2: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setLastName(event.target.value);
  };
  const handleChange3: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const HandleChange4: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    setMessage(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <input
        name="First Name"
        type="text"
        onChange={handleChange}
        value={firstName}
        placeholder="First Name"
        style={{ alignSelf: "center" }}
      />

      <input
        name="Last Name"
        type="text"
        onChange={handleChange2}
        value={lastName}
        placeholder="Last Name"
        style={{ alignSelf: "center" }}
      />

      <input
        name="Email"
        type="text"
        onChange={handleChange3}
        value={email}
        placeholder="Email"
        style={{ alignSelf: "center" }}
      />

      <textarea
        id="text-area"
        placeholder="Message"
        onChange={HandleChange4}
        value={message}
        style={{ alignSelf: "center" }}
      />

      <button
        onClick={() => {
          alert(
            `Thanks ${firstName} ${lastName}! We will contact you at ${email}.`
          );
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
        }}
        style={{ alignSelf: "center" }}
      >
        Send
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <ContactForm />
    </>
  );
}

export default App;
