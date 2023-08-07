import backArrow from "../../../../Images/Button - Back to Step 2.png";
import stockImage from "../../../../Images/reportstartphoto.png";
import tissue from "../../../../Images/sick-tissue.png";
import happy from "../../../../Images/happy.png";
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
    const { newUser, handleUserChange, handleUserSubmit } = useContext(FormContext);
  
    function handleTestSelection(testName) {
      setSelectedTest(testName);
  
      // Also update the context
      handleUserChange({
        target: { name: "test_taken", value: testName },
      });
  
      // Submit the form when the image is clicked
      handleSubmit();
    }
  
    function handleSubmit() {
      // Check if a test is selected before moving to the next page
      if (selectedTest !== null) {
        console.log("Selected Test:", selectedTest); // Handle the selected test, e.g., send it to the server.
  
        // Move to the next page
        setDemoPage(demoPage + 1);
      } else {
        // Display an error or alert to prompt the user to select a test before proceeding.
      }
    }
  
    return (
      <>
        <div className="questionNumber">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
          Required Question 2 of 5
        </div>
  
        <div className="questionAnswer">
          <p>
            <span className="question">Which test did you take?</span>
            <span className="asterisk">*</span>
            <br />
            <h3 className="critQuestionsH3">iHealth</h3>
              <img className="testImage" onClick={() => handleTestSelection("iHealth")} src={iHealth} alt="iHealth" style={{ maxWidth: "100%", width: "14rem", padding: "1rem" }} />

            <h3 className="critQuestionsH3">Abbott BinaxNOW</h3>
              <img className="testImage" onClick={() => handleTestSelection("Abbott BinaxNOW")} src={abbott} alt="Abbott" style={{ maxWidth: "100%", width: "14rem", padding: "1rem" }} />

              <img className="testImage" onClick={() => handleTestSelection("Flowflex")} src={flowFlex} alt="Flowflex" style={{ maxWidth: "100%", width: "14rem", padding: "1rem" }} />
            <button onClick={() => handleTestSelection("Other")} className="otherButton">Other</button>
          </p>
        </div>
      </>
    );
  }