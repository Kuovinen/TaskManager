import Task from "./CTask.js";

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
    props.taskList[2022][props.month] &&
    props.taskList[2022][props.month][props.day]
  ) {
    tasks = props.taskList[2022][props.month][props.day].map(
      (element, index) => (
        <Task
          key={index}
          title={element.title}
          time={element.time}
          details={element.details}
          setTaskData={props.setTaskData}
        />
      )
    );
  }
  function assign() {
    if (
      props.day &&
      props.taskList[2022][props.month] &&
      props.taskList[2022][props.month][props.day]
    ) {
      props.setSelectedDay({
        day: props.day,
        month: props.month,
        tasks: props.taskList[2022][props.month][props.day],
      });
    } else if (props.day) {
      props.setSelectedDay({
        day: props.day,
        month: props.month,
        tasks: [{ title: null, time: null, details: null }],
      });
    }
  }
  return (
    <div
      className="day"
      onClick={assign}
      style={{ background: background, border: border }}
    >
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
