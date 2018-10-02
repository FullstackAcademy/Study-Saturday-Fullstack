import React, { Component } from 'react';

export default class NewStudentForm extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>

        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>

        <label>
          Email:
          <input type="email" name="email" />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
