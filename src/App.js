import "./App.css";
import { useState } from "react";
import Month from "./components/Month.js";
import TaskDataDisplay from "./components/TaskDataDisplay.js";
import Input from "./components/Input.js";
import SelectedDay from "./components/SelectedDay.js";
function App() {
  let date = new Date();
  const [taskData, setTaskData] = useState({});
  const [selectedDay, setSelectedDay] = useState({
    day: null,
    month: null,
    tasks: [{ title: null, time: null, details: null }],
  });
  return (
    <div className="App">
      <Month
        date={date}
        setSelectedDay={setSelectedDay}
        taskData={taskData}
        setTaskData={setTaskData}
      />
      <div className="workspace">
        <SelectedDay setTaskData={setTaskData} data={selectedDay} />
        <TaskDataDisplay taskData={{ ...taskData }} />
        <Input />
      </div>
    </div>
  );
}

export default App;
