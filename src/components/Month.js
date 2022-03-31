import Day from "./Day.js";
import Weekday from "./Weekday.js";
import { useEffect, useState } from "react";
import getMonthString, { createYearData } from "./functions.js";

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

  //Create array fillied with day components, adding a style prop to weekends
  function constructMonth(number) {
    let days = yearObject.months[number].map((element, index) => {
      let weekend = false;
      let current = false;

      if ((index + 2) % 7 === 0 || (index + 1) % 7 === 0) {
        weekend = true;
      }
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
          setSelectedDay={props.setSelectedDay}
          setTaskData={props.setTaskData}
        />
      );
    });
    return days;
  }
  //set displayed mongth to the one before
  function prevMonth() {
    if (displayedMonthNumber > 0) {
      setDisplayedMonthNumber((current) => current - 1);
    }
  }
  //set displayed mongth to the next one
  function nextMonth() {
    if (displayedMonthNumber < 11) {
      setDisplayedMonthNumber((current) => current + 1);
    }
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
    setDisplayedMonth(constructMonth(displayedMonthNumber));
  }, [displayedMonthNumber]);
  useEffect(() => {
    setMonthTitle(getMonthString(displayedMonthNumber));
  }, [displayedMonthNumber]);
  return (
    <section className="main">
      <div className="buttons">
        <button className="chngM" onClick={prevMonth}>
          {"<<"}
        </button>{" "}
        <div className="year">
          {monthTitle} {year}
        </div>
        <button className="chngM" onClick={nextMonth}>
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
