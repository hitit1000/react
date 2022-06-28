import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <h1>Hello 본문</h1>
      <Hello />
      <Hello />
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
