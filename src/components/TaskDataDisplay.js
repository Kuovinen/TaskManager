import produce from "immer";
//component in the lower section, midddle, displays each task data details
export default function TaskDataDisplay(props) {
  function deleteTask() {
    if (props.day) {
      //task data
      let target = {
        title: props.taskData.title,
        time: props.taskData.time,
        details: props.taskData.details,
      };
      //change to string for future comparison.
      //Because objects are need to be the same ref to be equal
      target = JSON.stringify(target);
      //selected day
      let inspectedDay = props.taskList[2022][props.month][props.day];
      //create updated day Data, by excluding the component that has the same
      //value as the one that's selected.
      let updatedDay = inspectedDay.filter(
        (element, index) => target !== JSON.stringify(inspectedDay[index])
      );
      //Update the selected Day window at the bottom, removing the deleted task
      props.setSelectedDay(
        produce((draft) => {
          draft.tasks = updatedDay;
        })
      );
      //Update the calendar day display, removing the deleted task
      props.setTaskList(
        produce((draft) => {
          draft[2022][props.month][props.day] = updatedDay;
        })
      );
    }
  }

  return (
    <div className="selectedTask">
      <div className="info">
        <div className="selectedtTitle">{props.taskData.title}</div>
        <div className="selectedtTime">{props.taskData.time}</div>
        <div className="selectedtDetails">{props.taskData.details}</div>
      </div>

      <div className="taskButtons">
        <button className="tButton" onClick={deleteTask}>
          DELETE
        </button>
      </div>
    </div>
  );
}
