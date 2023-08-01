import backArrow from "../../../../Images/Button - Back to Step 2.png";
import { Button } from "react-bootstrap";
import "../../OptionalQuestions/OptionalQuestions.css";

export default function OptionalQuestionsInfo({ demoPage, setDemoPage }) {
  return (
    <div>
      <div className="questionsDiv">
        <div id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        </div>
        <h3 className="optionalH3">Optional Questions</h3>
        <p style={{ textAlign: "center", marginTop: "1rem !important", marginBottom: "2rem" }}>
          Help your community by answering the following optional-questions anonymously.
        </p>

        <ul style={{ textAlign: "left" }}>
          <li>
            <strong>Data that is shared here is anonymous</strong> and is not tied to any
            information that identifies you individually.
          </li>
        </ul>
        <ul style={{ textAlign: "left" }}>
          <li>
            Data collected through MakeMyTestCount is de-identified and sent to HHS Protect, a
            secure national database that also receives COVID-19 test results from labs and
            doctors’ offices.
          </li>
        </ul>
        <ul style={{ textAlign: "left" }}>
          <li>
            The data may be shared with <strong>researchers</strong> and{" "}
            <strong>support teams</strong> working on the MakeMyTestCount initiative.
          </li>
        </ul>
        <ul style={{ textAlign: "left" }}>
          <li>
            Public health teams at the state and local level can also get data from
            MakeMyTestCount and{" "}
            <strong>your response can help officials make important health decisions.</strong>
          </li>
        </ul>
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
      <div
        style={{ display: "block", marginBottom: "1.5rem" }}
        onClick={() => setDemoPage(demoPage + 1)}
      >
        <a href="your-link-here" target="_blank" rel="noopener noreferrer">
          Skip & Submit
        </a>
      </div>
    </div>
  );
}
