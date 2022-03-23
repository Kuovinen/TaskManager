import "./App.css";
import Month from "./components/Month.js";
function App() {
  let date = new Date();
  return (
    <div className="App">
      <Month date={date} />
    </div>
  );
}

export default App;
