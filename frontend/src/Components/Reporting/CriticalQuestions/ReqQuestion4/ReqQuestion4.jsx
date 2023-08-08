import React, { useState, useContext } from "react";
import backArrow from "../../../../Images/Button - Back to Step 2.png"
import "../CriticalQuestions.css"
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion4({ demoPage, setDemoPage }) {
    const [age, setAge] = useState("");
    const [isNextButtonClickable, setNextButtonClickable] = useState(false);
    const { handleUserChange } = useContext(FormContext);
  
    const handleAgeChange = (event) => {
      const inputAge = event.target.value;
      setAge(inputAge);
  
      // Enable the Next button when the age input is not empty
      if (inputAge !== "") {
        setNextButtonClickable(true);
      } else {
        setNextButtonClickable(false);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Update the context with the age value
      handleUserChange({
        target: { name: "age", value: age },
      });
  
      // Move to the next page
      setDemoPage(demoPage + 1);
    };
  
    return (
      <>
        <div className="questionNumber">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
          Required Question 4 of 5
        </div>
  
        <div className="questionAnswer">
          <p>
            <span className="question">How old are you?</span>
            <span className="asterisk">*</span>
            <br />
            <input
              className="reqQuestionsInput"
              type="text"
              placeholder="e.g., 44"
              value={age}
              onChange={handleAgeChange}
            />
          </p>
        </div>
  
        <div className="nextButtonDiv">
          {/* Conditionally style the Next button based on clickability */}
          <button
            className={`nextButton ${isNextButtonClickable ? "clickable" : ""}`}
            onClick={handleSubmit}
            disabled={!isNextButtonClickable}
            style={{ backgroundColor: isNextButtonClickable ? "#0058B7" : "" }} // Set background color to #0058B7 when clickable
          >
            Next
          </button>
        </div>
      </>
    );
  }