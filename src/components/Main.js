import React, {useState} from "react";
import { tests } from "./data";

function Main() {
    


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
                <td>{test.run}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
