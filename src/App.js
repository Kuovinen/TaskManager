import "./App.css";
import { useState, useEffect } from "react";
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
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

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
        <TaskDataDisplay
          taskData={{ ...taskData }}
          taskList={taskList}
          day={selectedDay.day}
          month={selectedDay.month}
        />
        <Input
          setTaskList={setTaskList}
          taskList={taskList}
          month={selectedDay.month}
          day={selectedDay.day}
        />
      </div>
    </div>
  );
}

export default App;
