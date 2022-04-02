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
        //decide if the day already has tasks assigned to it
        //if so - spread them out , add a new one and assign all to the value
        //if not, simply assign the new one to the value
        let newDayContent = draft[2022][props.month][props.day]
          ? [
              ...draft[2022][props.month][props.day],
              {
                title: event.target[0].value,
                time: event.target[1].value,
                details: event.target[2].value,
              },
            ]
          : [
              {
                title: event.target[0].value,
                time: event.target[1].value,
                details: event.target[2].value,
              },
            ];
        //update the month data by spreading it and adding content of the
        //set up day data
        draft[2022][props.month] = {
          ...draft[2022][props.month],
          [props.day]: newDayContent,
        };
      })
    );

    /****************************************************************************Add a save feature function here*/
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
        <input className="submitButton" type="submit" value="save"></input>
      </form>
    </div>
  );
}
