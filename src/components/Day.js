import Task from "./CTask.js";
//Component used to create day elements in the month section of the page
export default function Day(props) {
  let tasks = [];
  let border = props.current ? "0.2rem solid red" : "none";
  let dateStyle = props.weekend ? { color: "var(--cp-Text)" } : null;
  //assign background color based on if the day is a weekend
  let dayStyle = props.weekend
    ? { background: "var(--cp-Accent)", border: border }
    : { border: border };
  //update background color based on if the day has been selected
  dayStyle =
    props.selectedDay.day === props.day && props.selectedDay.day != null
      ? { background: "var(--cp-Blue)", border: border }
      : dayStyle;
  //create tasks based on already available taskList
  //props.day indicates if the calendar day is empty (preveious of next month)
  if (
    props.day &&
    props.taskList[props.year][props.month] &&
    props.taskList[props.year][props.month][props.day]
  ) {
    tasks = props.taskList[props.year][props.month][props.day].map(
      (element, index) => (
        <Task
          key={index}
          title={element.title}
          details={element.details}
          setTaskData={props.setTaskData}
        />
      )
    );
  }
  // Fills out the first info box of the lower section of the page.
  // Date if day has no tasks, date + tasks if it does.
  function assign() {
    //if an actual functioning day and a day tasks already exist, assign all data
    if (
      props.day &&
      props.taskList[props.year][props.month] &&
      props.taskList[props.year][props.month][props.day]
    ) {
      props.setSelectedDay({
        day: props.day,
        month: props.month,
        tasks: props.taskList[props.year][props.month][props.day],
      });
    }
    //if an actual functioning day and day tasks are not present
    else if (props.day) {
      props.setSelectedDay({
        day: props.day,
        month: props.month,
        tasks: [{ title: null, details: null }],
      });
    }
  }
  return (
    <div className={"day " + props.suffix} onClick={assign} style={dayStyle}>
      <div className="date" style={props.day === null ? null : dateStyle}>
        {props.day}
      </div>
      <div className="dayTasks">{tasks}</div>
    </div>
  );
}
