import React, { Component } from 'react';
import axios from 'axios';

export default class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Send POST HTTP request to create student on the server side
      const studentInfo = this.state;
      this.props.addStudent(studentInfo);

      // Clear state/form
      this.setState({
        firstName: '',
        lastName: '',
        email: ''
      });
    } catch (error) {
      alert('Error adding student. Please try again.');
    }
  };

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            required
            onChange={this.handleChange}
            type="text"
            value={firstName}
            name="firstName"
          />
        </label>

        <label>
          Last Name:
          <input
            required
            onChange={this.handleChange}
            type="text"
            value={lastName}
            name="lastName"
          />
        </label>

        <label>
          Email:
          <input
            required
            onChange={this.handleChange}
            type="email"
            value={email}
            name="email"
          />
        </label>

        <button type="submit">Submit New Student</button>
      </form>
    );
  }
}
