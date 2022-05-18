import "./App.css";
import { useState, useEffect, useRef } from "react";
import Month from "./components/Month.js";
import Input from "./components/Input.js";
import SelectedDay from "./components/SelectedDay.js";
import Toggle from "./components/Toggle.js";
import { initTaskList } from "./components/functions.js";
function App() {
  let date = new Date();

  //initTaskList;
  let initTL = initTaskList();
  if (localStorage.getItem("tasks") === null) {
    console.log("did not find local storage tasks, generating:");
    localStorage.setItem("tasks", JSON.stringify(initTL));
    console.log("Generated local storage.");
  }
  const [year, setYear] = useState(date.getFullYear());
  const [taskData, setTaskData] = useState({});
  const [selectedDay, setSelectedDay] = useState({
    day: date.getDate(),
    month: date.getMonth(),
    tasks: [{ title: null, details: null }],
  });
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );
  const initialRender = useRef(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <div className="timetable">
        <Toggle />
        <Month
          date={date}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          taskData={taskData}
          setTaskData={setTaskData}
          taskList={taskList}
          year={year}
          setYear={setYear}
          initialRender={initialRender}
        />
      </div>

      <div className="workspace">
        <SelectedDay
          setTaskData={setTaskData}
          setSelectedDay={setSelectedDay}
          setTaskList={setTaskList}
          data={selectedDay}
          taskList={taskList}
          year={year}
        />

        <Input
          setTaskList={setTaskList}
          taskList={taskList}
          year={year}
          month={selectedDay.month}
          day={selectedDay.day}
          initialRender={initialRender}
        />
      </div>
    </div>
  );
}

export default App;
