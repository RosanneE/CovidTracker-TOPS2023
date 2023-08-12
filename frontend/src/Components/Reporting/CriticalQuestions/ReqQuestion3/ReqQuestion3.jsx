import React, { useState, useEffect, useContext } from "react";
import backArrow from '../../../../Images/Button - Back to Step 2.png';
import '../CriticalQuestions.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion3({ demoPage, setDemoPage }) {
  const [selectedButton, setSelectedButton] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [isNextButtonVisible, setNextButtonVisible] = useState(false);
  const [isNextButtonClickable, setNextButtonClickable] = useState(false);
  const { handleUserChange } = useContext(FormContext);

  const handleButtonClick = (selected) => {
    setSelectedButton(selected);

    if (selected === "Today") {
      setSelectedDate(new Date()); // Automatically set selectedDate to today's date
      setNextButtonVisible(true);
      setNextButtonClickable(true);
    } else if (selected === "Yesterday") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      setSelectedDate(yesterday); // Automatically set selectedDate to yesterday's date
      setNextButtonVisible(true);
      setNextButtonClickable(true);
    } else if (selected === "Other") {
      setSelectedDate(null);
      setNextButtonVisible(true);
      setNextButtonClickable(false);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setNextButtonClickable(true);
  };

  useEffect(() => {
    if (selectedButton === "Today" || selectedButton === "Yesterday") {
      setNextButtonClickable(true);
    } else if (selectedButton === "Other" && selectedDate !== null) {
      setNextButtonClickable(true);
    } else {
      setNextButtonClickable(false);
    }
  }, [selectedButton, selectedDate]);
  return (
    <>
      <div className="questionNumber">
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        3 of 5
      </div>

      <div className="whenTestDiv">
        <p>
          <span className="question2">When did you test?</span>
          <span className="asterisk2"> *</span>
          <br />
          <button
            className={`selectButton ${selectedButton === "Today" ? "selected" : ""}`}
            style={{
              backgroundColor: selectedButton === "Today" ? "rgba(121, 239, 255, 0.50)" : ""
            }}
            onClick={() => handleButtonClick("Today")}
          >
            Today
          </button>
          <button
            className={`selectButton ${selectedButton === "Yesterday" ? "selected" : ""}`}
            style={{
              backgroundColor: selectedButton === "Yesterday" ? "rgba(121, 239, 255, 0.50)" : ""
            }}
            onClick={() => handleButtonClick("Yesterday")}
          >
            Yesterday
          </button>
          <button
            className={`selectButton ${selectedButton === "Other" ? "selected" : ""}`}
            style={{
              backgroundColor: selectedButton === "Other" ? "rgba(121, 239, 255, 0.50)" : ""
            }}
            onClick={() => handleButtonClick("Other")}
          >
            Other
          </button>
        </p>


      {isNextButtonVisible && (
        <>
          {selectedButton === "Other" && (
            <div className="calendar">
              <div className="calendarText">Please select a date</div>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                inline
              />
            </div>
          )}

          <div className="nextButtonDiv">
            <button
              className={`nextButton ${isNextButtonClickable ? "clickable" : ""}`}
              onClick={() => {
                if (isNextButtonClickable) {
                  const dateString =
                    selectedDate !== null ? selectedDate.toLocaleDateString("en-GB") : null;

                  handleUserChange({
                    target: { name: "test_date", value: dateString },
                  });

                  setDemoPage(demoPage + 1);
                }
              }}
              disabled={!isNextButtonClickable}
              style={{
                backgroundColor: isNextButtonClickable ? "#0058B7" : "#DDE5ED",
                border: isNextButtonClickable ? "3px solid #8A8A8A" : "none",
                cursor: isNextButtonClickable ? "pointer" : "not-allowed"
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
</div>
      <div className="requiredQuestion3 displayNone">
        <span className="requiredQuestionAsterisk2">* </span>
        <span className="requiredQuestionText2">Required question</span>
      </div>
    </>
  );
}