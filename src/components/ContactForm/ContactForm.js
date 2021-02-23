import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
class ContactForm extends Component {
  state = {
    name: "",
    phone: "",
  };

  handleChange = (event) => {
    // console.log(event.target);
    // console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.props.getValue(event.target);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, phone } = this.state;
    // if (name || phone) return;

    const contact = {
      id: uuidv4(),
      name,
      phone,
    };
    this.props.addContact(contact);
    this.setState({ name: "", phone: "" });
  };
  render() {
    // console.log("state : ", this.state);
    // console.log(this.props.addContact);
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="name"
          name="name"
          type="text"
          value={this.state.name}
          required
        />
        <input
          onChange={this.handleChange}
          placeholder="phone number"
          name="phone"
          type="tel"
          value={this.state.phone}
          required
        />
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
