import Task from "./CTask.js";

export default function Day(props) {
  let tasks = [];
  let border = props.current ? "0.2rem solid red" : "none";
  let dateStyle = props.weekend ? { color: "white" } : null;
  let dayStyle = props.weekend
    ? { background: "var(--cp-lGrey)", border: border }
    : { border: border };
  //create tasks based on already available taskList
  dayStyle =
    props.selectedDay.day === props.day && props.selectedDay.day != null
      ? { background: "var(--cp-Blue)", border: border }
      : dayStyle;

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
  // fills out the first box of the input section. Date if day has no tasks,
  // date+tasks if it does
  function assign() {
    //if an actual functioning day and a day tasks already exist
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
    }
    //if an actual functioning day and day tasks are not present
    else if (props.day) {
      props.setSelectedDay({
        day: props.day,
        month: props.month,
        tasks: [{ title: null, time: null, details: null }],
      });
    }
  }
  return (
    <div className="day" onClick={assign} style={dayStyle}>
      <div className="date" style={props.day === null ? null : dateStyle}>
        {props.day}
      </div>
      <div className="dayTasks">{tasks}</div>
    </div>
  );
}
