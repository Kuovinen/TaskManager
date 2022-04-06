//component used in lower sections first box to display individual tasks for a
//selected day
export default function InfoTask(props) {
  //used to display task data in the lower sections middle element
  function showData() {
    props.setTaskData({
      title: props.title,
      time: props.time,
      details: props.details,
    });
  }
  return (
    <div className="infoTask" onClick={showData}>
      {props.time} {props.title}
    </div>
  );
}
