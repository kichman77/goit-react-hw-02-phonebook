import React from "react";
import styles from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <>
      {contacts && (
        <ul className={styles.list}>
          {contacts.map((el) => {
            return (
              <li
                onClick={() => {
                  handleDelete(el.id);
                }}
                key={el.id}
              >
                {el.name}
                <spapn>{el.phone}</spapn>
                <button className={styles.btn} type="button">
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
