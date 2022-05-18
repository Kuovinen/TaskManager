import bin from "../garbage.svg";
import produce from "immer";
//component used in lower sections first box to display individual tasks for a
//selected day
export default function InfoTask(props) {
  function deleteTask() {
    let target = {
      title: props.title,
      details: props.details,
    };
    //change to string for future comparison.
    //Because objects are need to be the same ref to be equal
    target = JSON.stringify(target);
    //selected day
    let inspectedDay = props.taskList[props.year][props.month][props.day];
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
        draft[props.year][props.month][props.day] = updatedDay;
      })
    );
  }
  //used to display task data in the lower sections middle element
  function showData() {
    props.setTaskData({
      title: props.title,
      details: props.details,
    });
  }
  return (
    <div className="taskItem">
      <div className="infoTask" onClick={showData}>
        {props.title}
      </div>
      <div className="taskText">{props.details}</div>
      <button className="deleteTask" onClick={deleteTask}>
        <img src={bin} alt="deleteButton" className="binIcon" />
      </button>
    </div>
  );
}
