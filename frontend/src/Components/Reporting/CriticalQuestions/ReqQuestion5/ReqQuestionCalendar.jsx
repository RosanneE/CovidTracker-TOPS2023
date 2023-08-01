import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CriticalQuestions.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const ReqQuestionCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div className="calendar">
        <div className="calendarText">
        Please select your test date:
        </div>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          inline // Use the inline prop to display the calendar directly
        />
      </div>
    );
  };
  
  export default ReqQuestionCalendar;