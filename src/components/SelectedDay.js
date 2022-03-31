import InfoTask from "./InfoTask.js";
import getMonthString from "./functions.js";
export default function SelectedDay(props) {
  return (
    <div className="selectedDay">
      <div className="infoDate">
        {getMonthString(props.data.month)} {props.data.day}
      </div>

      {props.data.tasks.map((element, index) => (
        <InfoTask
          setTaskData={props.setTaskData}
          key={index}
          time={element.time}
          title={element.title}
          details={element.details}
        />
      ))}
    </div>
  );
}
