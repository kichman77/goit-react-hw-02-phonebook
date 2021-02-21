import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";
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
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      phone: this.state.name,
    };
    this.props.addContact(contact)
  };
  render() {
    // console.log("state : ", this.state);
    // console.log(this.props.addContact);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="name"
          name="name"
          type="text"
        />
        <input
          onChange={this.handleChange}
          placeholder="phone number"
          name="phone"
          type="tel"
        />
      </form>
    );
  }
}

export default ContactForm;
