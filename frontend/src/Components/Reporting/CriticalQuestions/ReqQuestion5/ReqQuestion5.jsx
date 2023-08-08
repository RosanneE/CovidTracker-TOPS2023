import backArrow from "../../../../Images/Button - Back to Step 2.png"
import "../CriticalQuestions.css"
import React, { useState, useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion5({ demoPage, setDemoPage }) {
    const [zipCode, setZipCode] = useState("");
    const [isNextButtonClickable, setNextButtonClickable] = useState(false);
    const { handleUserChange } = useContext(FormContext);
  
    const handleZipCodeChange = (event) => {
      const inputZipCode = event.target.value;
      setZipCode(inputZipCode);
  
      // Enable the Next button when the zip code input is not empty
      if (inputZipCode !== "") {
        setNextButtonClickable(true);
      } else {
        setNextButtonClickable(false);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Update the context with the zip code value
      handleUserChange({
        target: { name: "zipCode", value: zipCode },
      });
  
      // Move to the next page
      setDemoPage(demoPage + 1);
    };
  
    return (
      <>
        <div className="questionNumber">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
          Required Question 5 of 5
        </div>
  
        <div className="questionAnswer">
          <p>
            <span className="question">What is your home Zip Code?</span>
            <span className="asterisk">*</span>
            <br />
            <input
              className="reqQuestionsInput"
              type="text"
              placeholder="e.g., 11111"
              value={zipCode}
              onChange={handleZipCodeChange}
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