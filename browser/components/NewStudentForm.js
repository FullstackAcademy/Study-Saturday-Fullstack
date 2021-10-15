import React, { useReducer } from "react";

const NewStudentForm = (props) => {
  const { addStudent } = props;
  const [studentInfo, setStudentInfo] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      firstName: "",
      lastName: "",
      email: "",
    }
  );

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setStudentInfo({ [name]: newValue });
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      // Send POST HTTP request to create student on the server side
      const studentInfoPackage = studentInfo;
      addStudent(studentInfoPackage);

      // Clear state/form
      setStudentInfo({
        firstName: "",
        lastName: "",
        email: "",
      });
    } catch (error) {
      alert("Error adding student. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          required
          type="text"
          name="firstName"
          value={studentInfo.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name:
        <input
          required
          type="text"
          name="lastName"
          value={studentInfo.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          required
          type="email"
          name="email"
          value={studentInfo.email}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit New Student</button>
    </form>
  );
};

export default NewStudentForm;
