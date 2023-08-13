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

    const isValidAge = /^\d+$/.test(inputAge) && parseInt(inputAge) >= 1 && parseInt(inputAge) <= 122;

    // Enable the Next button when the age input is a valid number between 1 and 100
    if (isValidAge) {
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
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        4 of 5
      </div>

      <div className="whatAgeDiv">
        <p>
          <span className="question2">What is your age?</span>
          <span className="asterisk2"> *</span>
          <br />
          <input
            className="reqQuestionsInput"
            type="text"
            placeholder="e.g., 44"
            value={age}
            onChange={handleAgeChange}
          />
        </p>

      <div className="nextButtonDiv">
        {/* Conditionally style the Next button based on clickability */}
        <button
          className={`nextButton ${isNextButtonClickable ? "clickable" : ""}`}
          onClick={handleSubmit}
          disabled={!isNextButtonClickable}
          style={{
            backgroundColor: isNextButtonClickable ? "#0058B7" : "",
            border: isNextButtonClickable ? "3px solid #8A8A8A" : "none",
            cursor: isNextButtonClickable ? "pointer" : "not-allowed"
          }}
        >
          Next
        </button>
      </div>
      </div>
      <div className="requiredQuestion3 displayNone">
        <span className="requiredQuestionAsterisk2">* </span>
        <span className="requiredQuestionText2">Required question</span>
      </div>
    </>
  );
}