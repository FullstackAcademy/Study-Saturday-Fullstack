import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitStudentThunk } from '../store';

class NewStudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitStudent(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginLeft: '-30%' }}>
        <label>First Name:
          <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
        </label>
        <br></br>
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
        </label>
        <br></br>
        <label>
          Email:
          <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitStudent: (student) => dispatch(submitStudentThunk(student)),
  };
};

export default connect(null, mapDispatchToProps)(NewStudentForm);
