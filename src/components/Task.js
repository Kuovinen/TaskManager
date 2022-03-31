export default function Task(props) {
  function showData() {
    props.setTaskData({
      title: props.title,
      time: props.time,
      details: props.details,
    });
  }
  return (
    <div className="cTask" onClick={showData}>
      T
    </div>
  );
}
