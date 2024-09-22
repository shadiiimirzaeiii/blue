import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
  const [selectedDayFrom, setSelectedDayFrom] = useState(null);
  const [selectedDayTo, setSelectedDayTo] = useState(null);
  const [showCalendarFrom, setShowCalendarFrom] = useState(false);
  const [showCalendarTo, setShowCalendarTo] = useState(false);

  // Helper function to format the date
  const formatDate = (date) => {
    if (!date) return '';
    return `${date.day}/${date.month}/${date.year}`;
  };

  return (
    <div>
      <div>
        <span onClick={() => setShowCalendarFrom(!showCalendarFrom)} className="border-2 border-red-600">
          Selected From: {formatDate(selectedDayFrom)}
        </span>
        {showCalendarFrom && (
          <Calendar
            value={selectedDayFrom}
            onChange={setSelectedDayFrom}
            locale="fa"
            shouldHighlightWeekends
          />
        )}
      </div>

      <div>
        <span onClick={() => setShowCalendarTo(!showCalendarTo)} className="border-2 border-red-600">
          Selected To: {formatDate(selectedDayTo)}
        </span>
        {showCalendarTo && (
          <Calendar
            value={selectedDayTo}
            onChange={setSelectedDayTo}
            locale="fa"
            shouldHighlightWeekends
          />
        )}
      </div>
    </div>
  );
};

export default App;
