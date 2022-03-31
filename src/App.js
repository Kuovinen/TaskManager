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
      <Month date={date} taskData={taskData} setTaskData={setTaskData} />
      <div className="workspace">
        <TaskDataDisplay taskData={{ ...taskData }} />
        <Input />
      </div>
    </div>
  );
}

export default App;
