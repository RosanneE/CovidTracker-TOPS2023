import React, { useContext } from "react";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import { Button } from "react-bootstrap";
import "../../OptionalQuestions/OptionalQuestions.css";
import { FormContext } from "../../../../Context/FormContext";

export default function OptionalQuestionsInfo({ demoPage, setDemoPage }) {
  const { handleUserSubmit } = useContext(FormContext);

  const handleSkipAndSubmit = (event) => {
    handleUserSubmit(event);
    setDemoPage(10); // Redirects to the desired page
  };

  return (
    <div>
      <div className="questionsDiv">
        <div id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        </div>
        <h3 style={{ fontSize: "2rem" }} className="optionalH3">
          Optional Questions
        </h3>
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem !important",
            marginBottom: "2rem",
            fontSize: "1.3rem",
          }}
        >
          Help your community by answering the following optional-questions anonymously.
        </p>

        <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
          <strong>Data that is shared here is anonymous</strong> and is not tied to any
          information that identifies you individually.
        </p>
        <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
          Data collected through MakeMyTestCount is de-identified and sent to HHS Protect, a
          secure national database that also receives COVID-19 test results from labs and
          doctors’ offices.
        </p>
        <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
          The data may be shared with <strong>researchers</strong> and{" "}
          <strong>support teams</strong> working on the MakeMyTestCount initiative.
        </p>
        <p style={{ textAlign: "left", fontSize: "1.3rem" }}>
          Public health teams at the state and local level can also get data from
          MakeMyTestCount and{" "}
          <strong>your response can help officials make important health decisions.</strong>
        </p>
      </div>
      <div className="nextButtonDiv">
        <Button
          id="optionalQuestionsNextButton"
          style={{ marginTop: "1.5rem" }}
          type="Next"
          onClick={() => setDemoPage(demoPage + 1)}
        >
          Next
        </Button>
      </div>
      <div style={{ display: "block", marginBottom: "1.5rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline", color: "#007BFF" }}
          onClick={handleSkipAndSubmit}
        >
          Skip & Submit
        </span>
      </div>
    </div>
  );
}
