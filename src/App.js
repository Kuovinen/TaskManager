import "./App.css";
import { useState, useEffect } from "react";
import Month from "./components/Month.js";
import TaskDataDisplay from "./components/TaskDataDisplay.js";
import Input from "./components/Input.js";
import SelectedDay from "./components/SelectedDay.js";
import tasks from "./components/taskList.js";
function App() {
  let date = new Date();
  const [taskData, setTaskData] = useState({});
  const [selectedDay, setSelectedDay] = useState({
    day: null,
    month: null,
    tasks: [{ title: null, time: null, details: null }],
  });
  const [taskList, setTaskList] = useState(tasks);

  return (
    <div className="App">
      <Month
        date={date}
        setSelectedDay={setSelectedDay}
        taskData={taskData}
        setTaskData={setTaskData}
        taskList={taskList}
      />
      <div className="workspace">
        <SelectedDay setTaskData={setTaskData} data={selectedDay} />
        <TaskDataDisplay taskData={{ ...taskData }} />
        <Input setTaskList={setTaskList} taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
