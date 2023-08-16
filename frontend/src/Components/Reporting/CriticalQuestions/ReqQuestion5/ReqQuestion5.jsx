import backArrow from "../../../../Images/Button - Back to Step 2.png"
import "../CriticalQuestions.css"
import React, { useState, useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";
import information from "../../../../Images/informationicon.png";

export default function ReqQuestion5({ demoPage, setDemoPage }) {
  const [zipCode, setZipCode] = useState("");
  const [isNextButtonClickable, setNextButtonClickable] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const { handleUserChange } = useContext(FormContext);

  const handleZipCodeChange = (event) => {
    const inputZipCode = event.target.value;
    const numericZipCode = inputZipCode.replace(/[^0-9]/g, ""); // Keep only numeric characters
    setZipCode(numericZipCode);

    // Enable the Next button when the zip code input has exactly 5 numeric characters
    if (numericZipCode.length === 5) {
      setNextButtonClickable(true);
    } else {
      setNextButtonClickable(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the context with the zip code value
    handleUserChange({
      target: { name: "zipcode", value: zipCode },
    });

    // Move to the next page
    setDemoPage(demoPage + 1);
  };

  return (
    <>
      <div className="questionNumber">
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        5 of 5
      </div>

      <div className="whatZipDiv">
        <p>
          <span className="question2">What is your home zipcode?</span>
          <span className="asterisk2"> *</span>
          <br />
          <input
            className="reqQuestionsInput"
            type="text"
            placeholder="e.g., 11111"
            value={zipCode}
            maxLength={5} // Limit input to 5 characters
            onChange={handleZipCodeChange}
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
      
      <div className="rememberMe displayNone">
      <input className="checkbox" type="checkbox" id="Checkbox" name="checkbox" value="1" />
      Remember me on this device. 
      <img
        src={information}
        alt="Information icon"
        onClick={() => setPopupVisible(true)}
      />
      {isPopupVisible && (
        <div className="popup-overlay" onClick={() => setPopupVisible(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <p>Checking this box will give you a journal of your results, and will let this form remember you on this device.<br/><br/>
            If you no longer wish to be remembered on this device, you 
can uncheck this box the next time you report a result. You will lose access to test results you have already reported.</p>
          </div>
        </div>
      )}
    </div>
    </div>
      <div className="requiredQuestion3 displayNone">
        <span className="requiredQuestionAsterisk2">* </span>
        <span className="requiredQuestionText2">Required question</span>
      </div>
    </>
  );
}