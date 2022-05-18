import Day from "./Day.js";
import Weekday from "./Weekday.js";
import { useEffect, useState, useRef } from "react";
import getMonthString, { createYearData } from "./functions.js";
//components that produces the main month element
export default function Month(props) {
  const initialRender = useRef(false);
  const [yearObject, setYearObject] = useState(createYearData(props.year));

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
          suffix={element === null && "opacity50"}
          month={number}
          year={props.year}
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
    } else {
      setDisplayedMonthNumber(11);
      props.setYear(() => props.year - 1);
    }
    props.setSelectedDay({
      day: null,
      month: null,
      tasks: [{ title: null, details: null }],
    });
  }
  //set displayed mongth to the next one
  function nextMonth() {
    if (displayedMonthNumber < 11) {
      setDisplayedMonthNumber((current) => current + 1);
    } else {
      setDisplayedMonthNumber(0);
      props.setYear(() => props.year + 1);
    }
    props.setSelectedDay({
      day: null,
      month: null,
      tasks: [{ title: null, details: null }],
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
  //if year changed, update the yearObject to regenerate calendar structure data
  useEffect(() => {
    if (initialRender.current) {
      setYearObject(() => createYearData(props.year));
    }
  }, [props.year]);
  //if yearObject changed, reconstruct the current month
  useEffect(() => {
    if (initialRender.current) {
      constructMonth(displayedMonthNumber);
    }
  }, [yearObject]);

  //CHANGE DISPLAYED MONTH ON NUMBER CHANGE (linked to button functions)
  useEffect(() => {
    if (initialRender.current) {
      setDisplayedMonth(() => constructMonth(displayedMonthNumber));
    }
  }, [props.taskList, props.selectedDay, yearObject]);
  useEffect(() => {
    if (initialRender.current) {
      setMonthTitle(getMonthString(displayedMonthNumber));
    } else {
      initialRender.current = true;
    }
  }, [displayedMonthNumber]);
  return (
    <section className="main">
      <div className="buttons">
        <button
          className="chngM"
          onClick={prevMonth}
          style={{ color: "var(--cp-Text)" }}
        >
          {"<<"}
        </button>{" "}
        <div className="year" style={props.yearStyle}>
          {monthTitle} {props.year}
        </div>
        <button
          className="chngM"
          onClick={nextMonth}
          style={{ color: "var(--cp-Text)" }}
        >
          {">>"}
        </button>
      </div>
      <div className="weekdays">
        {["M", "T", "W", "T", "F", "S", "S"].map((element, index) => (
          <Weekday key={element + index} day={element} />
        ))}
      </div>
      <div className="month">{displayedMonth}</div>
    </section>
  );
}
