import Task from "./Task.js";
import taskList from "./taskList.js";

export default function Day(props) {
  let background = "none";
  let border = "0.1rem solid var(--cp-Darkest)";
  let tasks = [];
  if (props.weekend) {
    background = "var(--cp-lGrey)";
  }
  if (props.current) {
    border = "0.3rem solid var(--cp-Black)";
  }
  //create tasks
  if (
    props.day &&
    taskList[2022][props.month] &&
    taskList[2022][props.month][props.day]
  ) {
    tasks = taskList[2022][props.month][props.day].map((element, index) => (
      <Task
        key={index}
        title={element.title}
        time={element.time}
        details={element.details}
        setTaskData={props.setTaskData}
      />
    ));
  }

  return (
    <div className="day" style={{ background: background, border: border }}>
      <div
        className="date"
        style={props.day === null ? null : { background: "var(--cp-Darkest)" }}
      >
        {props.day}
      </div>
      <div className="dayTasks">{tasks}</div>
    </div>
  );
}
