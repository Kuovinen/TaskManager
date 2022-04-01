import produce from "immer";
import React from "react";
export default function Input(props) {
  function saveData(event) {
    event.preventDefault();
    // if there is text in input field (then it's "trufy")
    // make a message element with the text value
    // inputTXT &&

    //needs proper IF conditioning
    props.setTaskList(
      produce((draft) => {
        draft[2022][props.month] = {
          ...draft[2022][props.month],
          [props.day]: [
            { title: "DOG WASHING", time: "13:00", details: "Lorem" },
          ],
        };
      })
    );
  }

  return (
    <div className="inputForm">
      <form
        onSubmit={(event) => {
          saveData(event);
        }}
      >
        <input className="iInput" placeholder="TITLE"></input>
        <input className="iInput" placeholder="TIME"></input>
        <textarea className="iDetails" placeholder="DETAILS"></textarea>
        <button onClick={saveData}>SAVE</button>
      </form>
    </div>
  );
}
