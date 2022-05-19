import produce from "immer";
import React from "react";
//component in the lower section, last one, for data input.
export default function Input(props) {
  function saveData(event) {
    event.preventDefault();
    props.setTaskList(
      produce((draft) => {
        //if there is at least SOME data to save
        if (props.taskData.title !== "") {
          //decide if the day already has tasks assigned to it
          //if so - spread them out , add a new one and assign all to the value
          //if not, simply assign the new one to the value
          if (props.taskData.id === 0) {
            const id = Date.now();
            const newDayContent = draft[props.year][props.month][props.day]
              ? [
                  {
                    id: id,
                    finished: false,
                    title: props.taskData.title,
                    details: props.taskData.details,
                  },
                  ...draft[props.year][props.month][props.day],
                ]
              : [
                  {
                    id: id,
                    finished: false,
                    title: props.taskData.title,
                    details: props.taskData.details,
                  },
                ];
            //update the month data by spreading it and adding content of the
            //set up day data
            draft[props.year][props.month] = {
              ...draft[props.year][props.month],
              [props.day]: newDayContent,
            };
          }
          //else can only be true if a tasklist has something in it
          //so we replace that something with a new value using the id
          else {
            const currentTaskList =
              props.taskList[props.year][props.month][props.day];
            const purgedTaskList = currentTaskList.filter(
              (element) => element.id !== props.taskData.id
            );
            const newDayContent = [
              {
                id: props.taskData.id,
                finished: false,
                title: props.taskData.title,
                details: props.taskData.details,
              },
              ...purgedTaskList,
            ];
            //update the month data by spreading it and adding content of the
            //set up day data
            draft[props.year][props.month] = {
              ...draft[props.year][props.month],
              [props.day]: newDayContent,
            };
          }
          //reset inputfield
          props.setTaskData({
            id: 0,
            finished: false,
            title: "",
            details: "",
          });
        }
      })
    );
  }

  //clear input field
  function clear() {
    props.setTaskData({
      id: 0,
      finished: false,
      title: "",
      details: "",
    });
  }
  function typeTitle(event) {
    props.setTaskData((data) => {
      return { ...data, title: event.target.value };
    });
  }
  function typeDets(event) {
    props.setTaskData((data) => {
      return { ...data, details: event.target.value };
    });
  }
  return (
    <div className="inputForm">
      <form
        onSubmit={(event) => {
          saveData(event);
        }}
      >
        <input
          className="iInput"
          placeholder="Title"
          value={props.taskData.title}
          onInput={typeTitle}
        ></input>
        <textarea
          className="iDetails"
          placeholder="Details:"
          value={props.taskData.details}
          onInput={typeDets}
        ></textarea>
        <button className="clearButton" type="button" onClick={clear}>
          Clear
        </button>
        <input className="saveButton" type="submit" value="Save"></input>
      </form>
    </div>
  );
}
