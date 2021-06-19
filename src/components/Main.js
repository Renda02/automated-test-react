import React, {useState} from "react";
import { tests } from "./data";

function Main() {
    const [started, setStarted] =useState('Not Started')
const [testPassed,setTestPassed= useState(0)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Test Descrption</th>
            <th>Status of Test</th>
          </tr>
        </thead>
        <tbody>
          {tests.map((test, key) => {
            return (
              <tr>
                <td>{test.description}</td>
                <td>{started}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
          <ul><li>Number of test running: {testPassed} </li><li>Number of test passed: {testPassed} </li>
          <li>Number of test failed: {testPassed} </li></ul>
      </div>
    </div>
  );
}

export default Main;
