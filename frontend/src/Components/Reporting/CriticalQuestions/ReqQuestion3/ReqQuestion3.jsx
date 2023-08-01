import React, { useState } from 'react';
import backArrow from '../../../../Images/Button - Back to Step 2.png';
import ReqQuestionCalendar from '../ReqQuestion5/ReqQuestionCalendar';
import '../CriticalQuestions.css';

export default function ReqQuestion3({ demoPage, setDemoPage }) {
  const [selectedButton, setSelectedButton] = useState('');

  const handleButtonClick = (selected) => {
    setSelectedButton(selected);
  };

  return (
    <>
      <div className="questionNumber">
        <img
          src={backArrow}
          alt="Back Arrow"
          onClick={() => setDemoPage(demoPage - 1)}
        />
        Required Question 3 of 5
      </div>

      <div className="questionAnswer">
        <p>
          <span className="question">When did you test?</span>
          <span className="asterisk">*</span>
          <br />
          <button
            className={`selectButtonLeft ${
              selectedButton === 'Today' ? 'selected' : ''
            }`}
            onClick={() => handleButtonClick('Today')}
          >
            Today
          </button>
          <button
            className={`selectButtonMiddle ${
              selectedButton === 'Yesterday' ? 'selected' : ''
            }`}
            onClick={() => handleButtonClick('Yesterday')}
          >
            Yesterday
          </button>
          <button
            className={`selectButtonRight ${
              selectedButton === 'Other' ? 'selected' : ''
            }`}
            onClick={() => handleButtonClick('Other')}
          >
            Other
          </button>
        </p>
      </div>

      <div className="calendar">
        <ReqQuestionCalendar />
      </div>

      <div className="nextButtonDiv">
        <button
          className="nextButton"
          onClick={() => setDemoPage(demoPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}