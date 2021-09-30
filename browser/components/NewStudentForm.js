import React from "react"

const NewStudentForm = () => {
  return (
    <form>
      <label>
        First Name:
        <input required type="text" name="firstName" />
      </label>

      <label>
        Last Name:
        <input required type="text" name="lastName" />
      </label>

      <label>
        Email:
        <input required type="email" name="email" />
      </label>

      <button type="submit">Submit New Student</button>
    </form>
  )
}

export default NewStudentForm
