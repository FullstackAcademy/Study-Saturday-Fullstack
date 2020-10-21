import axios from 'axios';

// ACTION TYPES
const STUDENTS_RECEIVED = 'STUDENTS_RECEIVED';
const STUDENT_RECEIVED = 'STUDENT_RECEIVED';
const STUDENT_SELECTED = 'STUDENT_SELECTED';

// ACTION CREATORS
const studentsReceived = (students) => ({
  type: STUDENTS_RECEIVED,
  students
});

const studentReceived = (student) => ({
  type: STUDENT_RECEIVED,
  student
});

export const studentSelected = (selectedStudent) => ({
  type: STUDENT_SELECTED,
  selectedStudent
});

// THUNK CREATORS
export const fetchStudents = () => async (dispatch) => {
  try {
    const { data: students } = await axios.get('/api/students');
    dispatch(studentsReceived(students));
  } catch (error) {
    console.error('Error fetching students from API');
    console.error(error);
  }
};

export const createStudent = (studentInfo) => async (dispatch) => {
  try {
    const { data: student } = await axios.post('/api/students', studentInfo);
    dispatch(studentReceived(student));
  } catch (error) {
    console.error('Error creating student from API');
    console.error(error);
  }
};

// INITIAL STATE
const initialState = {
  students: [],
  selectedStudent: {}
};

// REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENTS_RECEIVED:
      return { ...state, students: action.students };
    case STUDENT_RECEIVED:
      return { ...state, students: [...state.students, action.student] };
    case STUDENT_SELECTED:
      return { ...state, selectedStudent: action.selectedStudent };
    default:
      return state;
  }
};

export default rootReducer;
