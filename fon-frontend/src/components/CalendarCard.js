import React, { useState } from "react";
import Calendar from "react-calendar";

function CalendarCard() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarCard;
