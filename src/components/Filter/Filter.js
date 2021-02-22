import React, { Component } from "react";

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
        onInput={this.hamdleChange}
        placeholder="Find contacts by name"
        name="filter"
        type="text"
      />
    );
  }
}

export default Filter;
