import Day from "./Day.js";
import { useEffect, useState } from "react";
import getMonthString, { createYearData, checkIfWeekend } from "./functions.js";

export default function Month(props) {
  let year = props.date.getFullYear();
  let yearObject = createYearData(year);
  //Create array fillied with day components, adding a style prop to weekends
  function constructMonth(number) {
    let days = yearObject.months[number].map((element, index) => {
      let weekend = false;
      if ((index + 2) % 7 == 0 || (index + 1) % 7 == 0) {
        console.log(index);
        weekend = true;
      }
      return (
        <Day
          key={index + number}
          day={element == null ? null : element.date}
          weekend={weekend}
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
      <div className="month">{displayedMonth}</div>
    </section>
  );
}
