import React, { useState, useEffect, useContext } from "react";
import backArrow from '../../../../Images/Button - Back to Step 2.png';
import '../CriticalQuestions.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion3({ demoPage, setDemoPage }) {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedDate, setSelectedDate] = useState(null); // Initialize selectedDate to null
  const [isNextButtonClickable, setNextButtonClickable] = useState(false); // Initialize the Next button clickability to false
  const { handleUserChange } = useContext(FormContext);

  const handleButtonClick = (selected) => {
    setSelectedButton(selected);

    // If the user selects "Today," set the selectedDate to today's date
    if (selected === "Today") {
      setSelectedDate(new Date());
    }
    // If the user selects "Yesterday," set the selectedDate to yesterday's date
    else if (selected === "Yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      setSelectedDate(yesterday);
    } else {
      // If the user selects "Other," clear the selected date
      setSelectedDate(null);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Check if the user has made a selection or picked a date from the calendar
  // If so, enable the Next button clickability
  useEffect(() => {
    if (selectedButton === "Today" || selectedButton === "Yesterday" || selectedDate !== null) {
      setNextButtonClickable(true);
    } else {
      setNextButtonClickable(false);
    }
  }, [selectedButton, selectedDate]);

  return (
    <>
      <div className="questionNumber">
        <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        Required Question 3 of 5
      </div>

      <div className="questionAnswer">
        <p>
          <span className="question">When did you test?</span>
          <span className="asterisk">*</span>
          <br />
          <button
            className={`selectButtonLeft ${selectedButton === "Today" ? "selected" : ""}`}
            onClick={() => handleButtonClick("Today")}
          >
            Today
          </button>
          <button
            className={`selectButtonMiddle ${
              selectedButton === "Yesterday" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Yesterday")}
          >
            Yesterday
          </button>
          <button
            className={`selectButtonRight ${
              selectedButton === "Other" ? "selected" : ""
            }`}
            onClick={() => handleButtonClick("Other")}
          >
            Other
          </button>
        </p>
      </div>

      {/* Render the custom-styled calendar when "Other" button is selected */}
      {selectedButton === "Other" && (
        <div className="calendar">
          <div className="calendarText">Please select your test date:</div>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            inline // Use the inline prop to display the calendar directly
          />
        </div>
      )}

      <div className="nextButtonDiv">
        {/* Conditionally style the Next button based on clickability */}
        <button
          className={`nextButton ${isNextButtonClickable ? "clickable" : ""}`}
          onClick={() => {
            if (isNextButtonClickable) {
              // Convert the date to a string in the format dd/MM/yyyy
              const dateString =
                selectedDate !== null
                  ? selectedDate.toLocaleDateString("en-GB")
                  : null;

              // Update the context with the selected date
              handleUserChange({
                target: { name: "test_date", value: dateString },
              });

              setDemoPage(demoPage + 1);
            }
          }}
          disabled={!isNextButtonClickable}
          style={{ backgroundColor: isNextButtonClickable ? "#0058B7" : "" }} // Set background color to #0058B7 when clickable
        >
          Next
        </button>
      </div>
    </>
  );
}