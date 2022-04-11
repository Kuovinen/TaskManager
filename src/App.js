import "./App.css";
import { useState, useEffect } from "react";
import Month from "./components/Month.js";
import TaskDataDisplay from "./components/TaskDataDisplay.js";
import Input from "./components/Input.js";
import SelectedDay from "./components/SelectedDay.js";
import Toggle from "./components/Toggle.js";
function App() {
  let date = new Date();
  let initTaskList = {
    [date.getYear() + 1900]: {
      0: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
      11: {},
    },
  };
  if (localStorage.getItem("tasks") === null) {
    localStorage.setItem("tasks", JSON.stringify(initTaskList));
  }

  const [taskData, setTaskData] = useState({});
  const [selectedDay, setSelectedDay] = useState({
    day: null,
    month: null,
    tasks: [{ title: null, time: null, details: null }],
  });
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );
  const [yearStyle, setYearStyle] = useState({ color: "var(--cp-White)" });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);
  return (
    <div className="App">
      <Toggle setYearStyle={setYearStyle} yearStyle={yearStyle} />

      <Month
        date={date}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        taskData={taskData}
        setTaskData={setTaskData}
        taskList={taskList}
        yearStyle={yearStyle}
      />
      <div className="workspace">
        <SelectedDay setTaskData={setTaskData} data={selectedDay} />
        <TaskDataDisplay
          taskData={{ ...taskData }}
          taskList={taskList}
          setSelectedDay={setSelectedDay}
          day={selectedDay.day}
          month={selectedDay.month}
          setTaskList={setTaskList}
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
