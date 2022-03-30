export default function Input() {
  function saveData() {
    console.log("Save data to file");
  }

  return (
    <form>
      <input className="input" placeholder="Title"></input>
      <input className="input" placeholder="Time"></input>
      <textarea className="details" placeholder="Task details"></textarea>
      <button onClick={saveData}>SAVE</button>
    </form>
  );
}
