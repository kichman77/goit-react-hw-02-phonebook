import React from "react";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts && (
        <ul>
          {contacts.map((el) => {
            return (
              <li onClick={()=>{handleDelete(el.id)}} key={el.id}>
                {el.name}
                <spapn>{el.phone}</spapn>
                <button  type='button'>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;
