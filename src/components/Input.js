export default function Input() {
  function saveData() {
    console.log("Save data to file");
  }

  return (
    <div className="inputForm">
      <form>
        <input className="iInput" placeholder="TITLE"></input>
        <input className="iInput" placeholder="TIME"></input>
        <textarea className="iDetails" placeholder="DETAILS"></textarea>
        <button onClick={saveData}>SAVE</button>
      </form>
    </div>
  );
}
