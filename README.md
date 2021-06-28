## Automated test

The task is to build an automated test runner that executes tests in the 
browser and reports on their results as soon as each test has completed.

Solution by [Rendani Luvhengo](mailto:rluvhengo2@gmail.com)
Demo [Automated Test](https://automated-react-test.netlify.app/)

## Assumptions

TODO:
- A simple design of the of automated test 
- Build two components for test data and main component to pass data and render the test.
- Have a button to  run the 6 tests simultaneously.
- Have test update in which it display numbers of test passed/failed and running.
- Display/Alert test done when test are completed running.
- make the app responsive


## Proposed Solution

TODO:
- Created data component which I store the test data and main component which the test data is pass to.
- Keep all the test in memory using useState.
- Initialize the tests in a state by mapping through the tests and returning an object and also add intial status  'not started' 
- Add a button with an onClick function in which as soon as it's click/press it starts to run and change the status to running.
- use forEach() array method inside the onClick function to first get the each test taking two argument(test, index)
- To update the test use  callback function which will first change the test to running by copy the the tests to newList then update the status by Update the test with the new status using the index
- To get the status of the tests filter() the testList


## Libraries / Tools Used

- React.js
- Create React App for project setup


## Setup

To install the dependencies run:

`npm install`

And to run the app:

`npm start`


### Running the tests

#### Unit Tests

You can run the unit tests using:

`npm test`

#### Integration Tests

To run Cypress in interactive mode run:

`npm run cy:start`