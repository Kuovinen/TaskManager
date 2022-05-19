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
  const [taskData, setTaskData] = useState({
    id: 0,
    finished: false,
    title: "",
    details: "",
  });
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("tasks"))
  );
  const [selectedDay, setSelectedDay] = useState({
    day: date.getDate(),
    month: date.getMonth(),
    tasks: taskList[year][date.getMonth()][date.getDate()],
  });

  const initialRender = useRef(true);
  //update both selected day info and local storage if changed taskList
  useEffect(() => {
    setSelectedDay((data) => {
      console.log(data);
      return {
        day: data.day,
        month: data.month,
        tasks: taskList[year][data.month][data.day],
      };
    });
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
          data={selectedDay}
          setSelectedDay={setSelectedDay}
          taskList={taskList}
          setTaskList={setTaskList}
          year={year}
        />
        <Input
          setSelectedDay={setSelectedDay}
          taskList={taskList}
          setTaskList={setTaskList}
          taskData={taskData}
          setTaskData={setTaskData}
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
