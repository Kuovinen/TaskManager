import produce from "immer";
import React from "react";
//component in the lower section, last one, for data input.
export default function Input(props) {
  function saveData(event) {
    event.preventDefault();
    props.setTaskList(
      produce((draft) => {
        //if there is at least SOME data to save and a day is selected
        if (event.target[0].value && props.day) {
          //decide if the day already has tasks assigned to it
          //if so - spread them out , add a new one and assign all to the value
          //if not, simply assign the new one to the value
          let newDayContent = draft[props.year][props.month][props.day]
            ? [
                ...draft[props.year][props.month][props.day],
                {
                  title: event.target[0].value,
                  details: event.target[1].value,
                },
              ]
            : [
                {
                  title: event.target[0].value,
                  details: event.target[1].value,
                },
              ];
          //update the month data by spreading it and adding content of the
          //set up day data
          draft[props.year][props.month] = {
            ...draft[props.year][props.month],
            [props.day]: newDayContent,
          };
        }
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
        <input className="iInput" placeholder="Title"></input>
        <textarea className="iDetails" placeholder="Details:"></textarea>
        <input className="newButton" value="NEW"></input>
        <input className="addButton" type="submit" value="ADD"></input>
      </form>
    </div>
  );
}
