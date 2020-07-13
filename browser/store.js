import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// without the middleware, you wouldn't
// be able to make axios calls within our action creators


import axios from 'axios';

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const STUDENT_DETAILS = 'STUDENT_DETAILS';
const TOGGLE_FORM = 'TOGGLE_FORM';
const SUBMIT_STUDENT = 'SUBMIT_STUDENT';

const submitStudentActionCreator = (student) => {
  return {
    type: SUBMIT_STUDENT,
    student,
  };
};

const studentDetailsActionCreator = (student) => {
  return {
    type: STUDENT_DETAILS,
    student,
  };
};

const toggleFormActionCreator = () => {
  return {
    type: TOGGLE_FORM,
  };
};

const getStudentsActionCreator = (students) => {
  return {
    type: GET_ALL_STUDENTS,
    students,
  };
};

export const getStudentsThunk = () => {
  return async (dispatch) => {
    try { // redux store just invokes this function, once
      // we dispatch the function to the Redux store
      const response = await axios.get('/student');
      // makes the HTTP request from the browser
      // building the request for you.
      dispatch(getStudentsActionCreator(response.data));
    } catch (error) {
      // what should we do with errors in thunks?
      console.error(error);
      // in express, it's more straightforward because
      // you have access to next and do all error handling
      // in middleware; more straightforward to always use next()
      // the most you'll want to do for JPFP is console.error.
      // depending on if there's a requirement for errors
      // in production, might want to send error data to engineering team and display something formatted with user's experience in mind, like a friendly error message
    }
  };
};

export const submitStudentThunk = (student) => {
  return async (dispatch) => {
    const response = await axios.post('/student', student);
    dispatch(submitStudentActionCreator(response.data));
  }; // invoking them in line; this time, the
  // return of that invocation of your thunk is
  // another function, which is what gets sent to dispatch
};

export const studentDetailsThunk = (student) => {
  return (dispatch) => {
    dispatch(studentDetailsActionCreator(student));
  };
}; // not the best solution for bigger sets of data
// google thunk alternatives

export const toggleFormThunk = () => {
  return (dispatch) => {
    dispatch(toggleFormActionCreator());
  }; // dispatch is just the messenger
};

const initialState = {
  students: [],
  studentDetails: {},
  showForm: false,
};

const reducer = (state = initialState, action) => {
  console.log('the following action was dispatched by \n',
    action,
    '\nwhich will now be reduced to one of the keys on state \n',
    state)
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, students: action.students };
    case STUDENT_DETAILS:
      return { ...state, studentDetails: action.student };
    case TOGGLE_FORM:
      return { ...state, showForm: !state.showForm };
    case SUBMIT_STUDENT:
      return { ...state, students: [...state.students, action.student] };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(thunkMiddleware));
// hover-over in VS code
