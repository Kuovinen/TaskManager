//Calendar task component that appears inside the day elements of the calendar
export default function Task(props) {
  //Assigns information to the lower information windows.
  function showData() {
    props.setTaskData({
      title: props.title,
      details: props.details,
    });
  }
  return <div className="cTask" onClick={showData}></div>;
}
