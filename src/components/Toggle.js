export default function Toggle(props) {
  function change() {
    let background = document.body.style.backgroundColor;
    let color = background == "white" ? "var(--cp-Black)" : "white";
    document.body.style.backgroundColor = color;
    props.setYearStyle((original) =>
      original.color == "var(--cp-White)"
        ? { color: "var(--cp-dGrey)" }
        : { color: "var(--cp-White)" }
    );
    console.log(props.yearStyle);
  }
  return (
    <label className="switch">
      <input type="checkbox" onClick={change} />
      <span className="slider round"></span>
    </label>
  );
}
