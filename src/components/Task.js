export default function Task(props) {
  function showData() {
    props.setData({
      title: props.title,
      time: props.timme,
      details: props.details,
    });
  }
  return (
    <div className="task" onClick={showData}>
      <div className={props.title}></div>
    </div>
  );
}
