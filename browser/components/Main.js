import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentList from './StudentList.js'
import SingleStudent from './SingleStudent.js'
import NewStudentForm from './NewStudentForm.js';
import { toggleFormThunk, getStudentsThunk } from '../store';

class Main extends Component {
  constructor() {
    super(); // state is outside of component unless it's
    // the local state; props (properties of component)
    // need to be passed down.
    // both state and props can be passed down,
    // but you can pass state down as props
    // avoid passing state down as 'state' because
    // it's confusing; we'd have props.state.
    // you should pass the information on state down as props
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getStudentsOnMount();
  }

  handleClick(e) {
    this.props.toggleAddStudentForm();
  }

  render() { // only for class components
    // variable declaration, object destructuring

    return ( // always has return
      <div style={{ position: 'absolute', top: '10%', left: '30%', marginRight: '-30%' }}>
        <h1>Students</h1>
        <button onClick={this.handleClick}>Add a student</button>
        {/* bootstrap for passing down CSS as props */}
        {this.props.showForm ? (
          <NewStudentForm />
        ) : null}
        {/* conditionally rendered based on Redux's state.showForm */}
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
