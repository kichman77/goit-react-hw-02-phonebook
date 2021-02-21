import React from "react";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </ul>
  );
};

export default ContactList;
