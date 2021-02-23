import React, { Component } from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
class Filter extends Component {
  state = {
    filter: "",
  };

  hamdleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.props.filterContact(event.target);
  };

  render() {
    return (
      <input
        className={styles.input}
        onInput={this.hamdleChange}
        placeholder="Find contacts by name"
        name="filter"
        type="text"
      />
    );
  }
}

export default Filter;

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
