# Study Saturdays: Week 4 - Fullstack Flow (Cycle 3)

## **Objective:** Build a form to add new students to our app

### Steps

- In `Main.js`
  - [ ] Add a method called "`addStudent`" that creates a new student in the database given an object (the information collected on `state` inside the `NewStudentForm` component) by making an `axios` request to the `POST` route created in Cycle 0
  - [ ] The `addStudent` method should also update the `state` (you can surmise specifically what in `state`)
  - [ ] Pass this method as a `prop` to the `NewStudentForm` component
- In `NewStudentForm.js`
  - [ ] Use the `addStudent` method from `props` in the `handleSubmit`
- [ ] Once done and tested, `git checkout cycle-4` (bonus)

