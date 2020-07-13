import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
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
    try {
      const response = await axios.get('/student');
      dispatch(getStudentsActionCreator(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const submitStudentThunk = (student) => {
  return async (dispatch) => {
    const response = await axios.post('/student', student);
    dispatch(submitStudentActionCreator(response.data));
  };
};

export const studentDetailsThunk = (student) => {
  return (dispatch) => {
    dispatch(studentDetailsActionCreator(student));
  };
};

export const toggleFormThunk = () => {
  return (dispatch) => {
    dispatch(toggleFormActionCreator());
  };
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
