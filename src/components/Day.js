export default function Day(props) {
  return (
    <div
      className="day"
      style={props.weekend ? { background: "var(--cp-lGrey)" } : null}
    >
      <div
        className="date"
        style={props.day == null ? null : { background: "var(--cp-Black)" }}
      >
        {props.day}
      </div>
      {props.weekday}
      <div className="tasks"></div>
    </div>
  );
}
