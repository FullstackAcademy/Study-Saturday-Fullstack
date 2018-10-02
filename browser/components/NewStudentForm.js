import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            onChange={this.handleChange}
            value={this.state.firstName}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
