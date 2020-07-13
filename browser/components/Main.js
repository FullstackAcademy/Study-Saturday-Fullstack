import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentList from './StudentList.js'
import SingleStudent from './SingleStudent.js'
import NewStudentForm from './NewStudentForm.js';
import { toggleFormThunk, getStudentsThunk } from '../store';

class Main extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getStudentsOnMount();
  }

  handleClick(e) {
    this.props.toggleAddStudentForm();
  }

  render() {
    return (
      <div style={{ position: 'absolute', top: '10%', left: '30%', marginRight: '-30%' }}>
        <h1>Students</h1>
        <button onClick={this.handleClick}>Add a student</button>
        {this.props.showForm ? (
          <NewStudentForm />
        ) : null}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          < StudentList />
        </table>
        {
          this.props.studentDetails.id ? <SingleStudent /> : null
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAddStudentForm: () => dispatch(toggleFormThunk()),
    getStudentsOnMount: () => dispatch(getStudentsThunk())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
