import React, { useState } from "react";
import { tests } from "./data";

const initialTestList = tests.map((ts) => ({
  ...ts,
  status: "NOT_STARTED",
}));

function Main() {
  const [testList, setStateList] = useState(initialTestList);

  function startTest() {
    testList.forEach((test, index) => {
      test.run(() => {
        // this is called when test pass
        console.log(index + " has passed");

        // 1. copy the list
        const testListNew = testList;

        // 2. build the new test
        testListNew[index] = {
          ...testList[index],
          status: "PASSED",
        };

        // 3. Update the state
        setStateList([...testListNew]);
      });

      // Changes status to running to all of the state
      // 1. Copy the list to a new one
      const testListNew = testList;
      // 2. Update the test with the new status using the index
      testListNew[index] = {
        ...testList[index], // the old test
        status: "RUNNING", // new status
      };
      // 3. Update the state with the new list
      setStateList([...testListNew]);
    });
  }

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Test Descrption</th>
            <th>Status of Test</th>
          </tr>
        </thead>
        <tbody>
          {testList.map((test, key) => {
            return (
              <tr>
                <td>{test.description}</td>
                <td class={`test-${test.status}`}>{test.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="test-result">
        <ul>
          <li>
            Number of test running:{" "}
            {testList.filter((ts) => ts.status == "RUNNING").length}{" "}
          </li>
          <li>
            Number of test passed:{" "}
            {testList.filter((ts) => ts.status == "PASSED").length}{" "}
          </li>
          <li>
            Number of test failed:{" "}
            {testList.filter((ts) => ts.status == "FAILED").length}{" "}
          </li>
        </ul>
      </div>{" "}
      <button onClick={startTest}>Run test</button>
    </div>
  );
}

export default Main;
