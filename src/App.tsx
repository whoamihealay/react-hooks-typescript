import "./App.css";
import { UseContext, UseEffect, UseReducer, UseState } from "./components";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseContext />
      <hr />
      <UseReducer />
    </div>
  );
}

export default App;
