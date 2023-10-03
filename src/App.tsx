import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const button = {
    minWidth: "70px",
    height: "70px",
    fontSize: "30px",
    color: "black",
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">

      <div className="bg-primary-subtle rounded p-4 d-flex flex-column justify-content-center align-items-center">
        <h1>Counter</h1>
        <div className="d-flex align-items-center mt-3">
          <button type="button" style={button} className="btn btn-warning"
            onClick={() => setCount((count) => count - 1)}>-</button>
          <span style={button} className="mx-3 border border-3 border-primary rounded text-center d-flex justify-content-center align-items-center">
            {count}
          </span>
          <button type="button" style={button} className="btn btn-success btn-lg"
            onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
