// src/App.js
import React from "react";
import myFunction from "./MyModule";
import { namedExport1, namedExport2, namedExport3 } from "./NamedExports";

function App() {
  return (
    <div className="App">
      <h1>React Dinina Aplikacija</h1>
      <p>Default export moduli: {myFunction()}</p>
      <p>Named/imenovani export moduli:</p>
      <ul>
        <li>{namedExport1}</li>
        <li>{namedExport2}</li>
        <li>{namedExport3}</li>
      </ul>
    </div>
  );
}

export default App;
