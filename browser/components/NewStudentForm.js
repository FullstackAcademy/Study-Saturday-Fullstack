import React, { useState } from "react";

const NewStudentForm = (props) => {
  const { addStudent } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstNameChange = (evt) => {
    const newValue = evt.target.value;
    setFirstName(newValue);
  };

  const handleLastNameChange = (evt) => {
    const newValue = evt.target.value;
    setLastName(newValue);
  };

  const handleEmailChange = (evt) => {
    const newValue = evt.target.value;
    setEmail(newValue);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const studentInfoPackage = {
        firstName,
        lastName,
        email,
      };

      setFirstName("");
      setLastName("");
      setEmail("");
      addStudent(studentInfoPackage)
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
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <label>
        Last Name:
        <input
          required
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>

      <label>
        Email:
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>

      <button type="submit">Submit New Student</button>
    </form>
  );
};

export default NewStudentForm;
