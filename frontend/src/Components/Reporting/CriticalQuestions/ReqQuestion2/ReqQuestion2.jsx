import backArrow from "../../../../Images/Button - Back to Step 2.png";
import iHealth from "../../../../Images/ihealth.png";
import abbott from "../../../../Images/abbott.png";
import flowFlex from "../../../../Images/flowflex.png";
import quidel from "../../../../Images/quidel.png";
import clinitest from "../../../../Images/clinitest.png";
import roche from "../../../../Images/roche.png";
import "../CriticalQuestions.css";
import { useState, useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion2({ demoPage, setDemoPage }) {
  const [selectedTest, setSelectedTest] = useState(null);
  const { newUser, handleUserChange } = useContext(FormContext); // Use useContext here to get the newUser state

  function handleTestSelection(testName) {
    setSelectedTest(testName);

    // Also update the context with the selected test
    handleUserChange({
      target: { name: "test_taken", value: testName },
    });

    // Log the selected test
    console.log("Selected Test:", testName);

    // Proceed when the image is clicked
    setDemoPage(demoPage + 1);
  }

  return (
    <>
    <div className="whichTestContainer">
      <div className="questionNumber">
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        2 of 5
      </div>

      <div className="whichTestDiv">
          <span className="question2">Which test did you take?</span>
          <span className="asterisk2"> *</span>
          <br />
          <div className="testCardContainer">
          <div className="testCard">
          <h3 className="critQuestionsH3">iHealth</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("iHealth")}
            src={iHealth}
            alt="iHealth"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="testCard">
          <h3 className="critQuestionsH3">Abbott BinaxNOW</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("Abbott BinaxNOW")}
            src={abbott}
            alt="Abbott"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="testCard">
          <h3 className="critQuestionsH3">Flowflex</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("Flowflex")}
            src={flowFlex}
            alt="Flowflex"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="testCard">
          <h3 className="critQuestionsH3">Quidel Quickvue</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("Quidel Quickvue")}
            src={quidel}
            alt="Quidel Quickvue"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="testCard">
          <h3 className="critQuestionsH3">Siemens CLINITEST</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("Siemens CLINITEST")}
            src={clinitest}
            alt="Siemens CLINITEST"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="testCard">
          <h3 className="critQuestionsH3">Roche COVID-19 At-Home Test</h3>
          <img
            className="testImage"
            onClick={() => handleTestSelection("Roche COVID-19 AT-Home Test")}
            src={roche}
            alt="Roche COVID-19 AT-Home Test"
            style={{ maxWidth: "100%", padding: "1rem" }}
          />
          </div>

          <div className="otherCard">
          <button onClick={() => handleTestSelection("Other")} className="otherButton">
            Other
          </button>
          </div>
          <div className="requiredQuestion2 displayNone">
        <span className="requiredQuestionAsterisk2">* </span>
        <span className="requiredQuestionText2">Required question</span>
      </div>
          </div>
      </div>
      </div>
    </>
  );
}