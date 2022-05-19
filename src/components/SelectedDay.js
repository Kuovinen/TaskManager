import InfoTask from "./InfoTask.js";
import getMonthString from "./functions.js";

//component used in the lower section, first element, displays the days tasks.
export default function SelectedDay(props) {
  function makeInfoTasks() {
    if (
      props.data.tasks[0] &&
      (props.data.tasks[0].title || props.data.tasks[0].details)
    ) {
      return props.data.tasks.map((element, index) => (
        <InfoTask
          setTaskData={props.setTaskData}
          setSelectedDay={props.setSelectedDay}
          setTaskList={props.setTaskList}
          taskList={props.taskList}
          key={index + "InfoTask"}
          id={element.id}
          finished={element.finished}
          title={element.title}
          details={element.details}
          day={props.data.day}
          month={props.data.month}
          year={props.year}
        />
      ));
    }
  }
  return (
    <div className="selectedDay">
      <div className="infoDate">
        <span>
          {getMonthString(props.data.month)} {props.data.day}
        </span>
      </div>
      <div className="taskArray">{makeInfoTasks()}</div>
    </div>
  );
}
