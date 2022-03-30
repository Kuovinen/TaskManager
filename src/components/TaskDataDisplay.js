export default function TaskDataDisplay(props) {
  function editTask() {
    console.log("taskEdited");
  }
  function deleteTask() {
    console.log("taskDeleted");
  }

  return (
    <div className="selectedTask">
      <div className="selectedtTitle">{props.taskData.title}</div>
      <div className="selectedtTime">{props.taskData.time}</div>
      <div className="selectedtDetails">{props.taskData.details}</div>
      <div className="taskButtons">
        <button className="tButton" onClick={editTask}>
          EDIT
        </button>
        <button className="tButton" onClick={deleteTask}>
          DELETE
        </button>
      </div>
    </div>
  );
}
