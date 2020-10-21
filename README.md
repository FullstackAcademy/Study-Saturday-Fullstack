# Study Saturdays: Week 4 - Fullstack Flow (Bonus Cycle)

## **Objective:** Build a form to add new students to our app
- [x] **Cycle 0:** Create a route for adding students
- [x] **Cycle 1:** Create and render a form
- [x] **Cycle 2:** Update state with form input
- [x] **Cycle 3:** Make the form functional
- [ ] **Cycle 4 (Bonus):** Refactor ⭐️

### Steps

- Refactor the code base to incorporate Redux and React-Redux
  - [ ] Install the following dependencies: `redux`, `react-redux`, `redux-thunk`, `redux-logger`
  - [ ] Wrap your application in `Provider` (`/browser/index.js`)
  - [ ] Create a `store.js` file within the `/browser` directory
    - Use `createStore` and `applyMiddleware` from `redux`
    - Feed `applyMiddleware` `loggingMiddleware` from `redux-logger` and `thunkMiddleware` from `redux-thunk`
  - [ ] Create `/browser/reducers/index.js`
    - Account for all of the actions in our `Main` component
      - Action Types (e.g. `'STUDENTS_RECEIVED'`, `'STUDENT_RECEIVED'`, `'STUDENT_SELECTED'`)
      - Action Creators
      - Thunk Creators
      - Initial State
      - Reducer
  - [ ] `connect` the `Main` component using `react-redux` mapping all the necessary pieces of `state` and Redux creators to `props`
    - Refactor throughout (e.g. `this.props` _instead of_ `this.state`)
  - [ ] Test functionality!
