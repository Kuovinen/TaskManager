import Day from "./Day.js";
import Weekday from "./Weekday.js";
import { useEffect, useState } from "react";
import getMonthString, { createYearData } from "./functions.js";
//components that produces the main month element
export default function Month(props) {
  let year = props.date.getFullYear();
  let yearObject = createYearData(year);
  let weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  //Create array fillied with day components
  function constructMonth(number) {
    let days = yearObject.months[number].map((element, index) => {
      let weekend = false;
      let current = false;
      //weekend background assignment trigger
      if ((index + 2) % 7 === 0 || (index + 1) % 7 === 0) {
        weekend = true;
      }
      //current day background assignment trigger
      if (
        element != null &&
        props.date.getDate() === element.date &&
        props.date.getMonth() === number
      ) {
        current = true;
      }
      return (
        <Day
          key={index + number}
          day={element === null ? null : element.date}
          month={number}
          weekend={weekend}
          current={current}
          taskData={props.taskData}
          selectedDay={props.selectedDay}
          setSelectedDay={props.setSelectedDay}
          setTaskData={props.setTaskData}
          taskList={props.taskList}
        />
      );
    });
    return days;
  }
  //set displayed month to the one before
  function prevMonth() {
    if (displayedMonthNumber > 0) {
      setDisplayedMonthNumber((current) => current - 1);
    }
    props.setSelectedDay({
      day: null,
      month: null,
      tasks: [{ title: null, time: null, details: null }],
    });
  }
  //set displayed mongth to the next one
  function nextMonth() {
    if (displayedMonthNumber < 11) {
      setDisplayedMonthNumber((current) => current + 1);
    }
    props.setSelectedDay({
      day: null,
      month: null,
      tasks: [{ title: null, time: null, details: null }],
    });
  }
  //STATES
  const [displayedMonthNumber, setDisplayedMonthNumber] = useState(
    props.date.getMonth()
  );
  const [displayedMonth, setDisplayedMonth] = useState(
    constructMonth(displayedMonthNumber)
  );
  const [monthTitle, setMonthTitle] = useState(
    getMonthString(displayedMonthNumber)
  );

  //CHANGE DISPLAYED MONTH ON NUMBER CHANGE (linked to button functions)
  useEffect(() => {
    setDisplayedMonth(() => constructMonth(displayedMonthNumber));
  }, [displayedMonthNumber, props.taskList, props.selectedDay]);
  useEffect(() => {
    setMonthTitle(getMonthString(displayedMonthNumber));
  }, [displayedMonthNumber]);

  return (
    <section className="main">
      <div className="buttons">
        <button className="chngM" onClick={prevMonth} style={props.yearStyle}>
          {"<<"}
        </button>{" "}
        <div className="year" style={props.yearStyle}>
          {monthTitle} {year}
        </div>
        <button className="chngM" onClick={nextMonth} style={props.yearStyle}>
          {">>"}
        </button>
      </div>
      <div className="weekdays">
        {weekdays.map((element) => (
          <Weekday key={element} day={element} />
        ))}
      </div>
      <div className="month">{displayedMonth}</div>
    </section>
  );
}
