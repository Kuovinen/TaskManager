import "./App.css";
import { useState } from "react";
import Month from "./components/Month.js";
import TaskDataDisplay from "./components/TaskDataDisplay.js";
import Input from "./components/Input.js";
function App() {
  let date = new Date();
  const [taskData, setTaskData] = useState({});
  return (
    <div className="App">
      <Month date={date} />
      <TaskDataDisplay
        taskData={{ title: "one", time: "two", details: "three" }}
      />
      <Input />
    </div>
  );
}

export default App;
