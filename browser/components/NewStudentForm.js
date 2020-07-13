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
// // convention
// const varname = (something) => {
//   return {
//     submitStudent: (student) => something(submitStudentThunk(student)),
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    // On line 26: basically passing in this.state as the student argument.

    submitStudent: (student) => dispatch(submitStudentThunk(student)),
  };
}; // redux store is listening to the payload of that dispatch
// (whether it's a function / object)

// if a thunk were a package, and a normal action were the
// letter, dispatch would be the mailbox; it delivers whatever
// you pass in to the redux store.


// export default connect(null, mapDispatchToProps)(NewStudentForm);
export default connect(null, mapDispatchToProps)(NewStudentForm);

// for regular exports, the names have to match because it's not default

