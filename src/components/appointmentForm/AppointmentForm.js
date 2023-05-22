import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  // Get the list of contact names from an array 
  // contact objects 
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            name="name"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Appointment Name"
            aria-label="Appointment Name"
          />
        </label>
        <br />
        <label>
          <ContactPicker
            name="contact"
            value={contact}
            contacts={contactNames}
            onChange={(e) => setContact(e.target.value)} 
          />
        </label>
        <br />
        <label>
          <input
            name="date"
            type="date"
            value={date}
            min={getTodayString}
            onChange={(e) => setDate(e.target.value)}
            required
            aria-label="Date picker"
          />
        </label>
        <br />
        <label>
          <input
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            aria-label="Time picker"
          />
        </label>
        <br />
        <input type="submit" value="Add appointment" aria-label="Add appointment" />
      </form></>
  );
};
