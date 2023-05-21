import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input 
            name="name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Contact name"
            aria-label="Contact name"
          />
        </label>
        <br />
        <label>
          <input 
            name="phone" 
            type="tel" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            placeholder="Phone number"
            aria-label="Phone number"
          />
        </label>
        <br />
        <label>
          <input 
            name="email" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            aria-label="Email"
          />
        </label>
        <br />
        <input type="submit" value="Add contact" aria-label="Add contact"/>
      </form>
    </>
  );
};

