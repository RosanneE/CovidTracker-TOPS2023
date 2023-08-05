import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalContact/OptionalContact.css";

export default function OptionalContactInfo({ demoPage, setDemoPage }) {
  return (
    <div>
      <div className="questionsDiv">
        <div id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        </div>
        <h3 style={{ fontSize: "2rem" }} className="optionalH3">
          Optional Contact Info
        </h3>

        <div
          style={{ textAlign: "center", marginTop: "1rem !important", marginBottom: "2rem" }}
        >
          <p style={{ fontSize: "1.5rem" }}>
            Are you willing to share your contact information?
          </p>
          <p>
            Sharing additional information makes your response more impactful to public health
            teams in your community.
          </p>
        </div>
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
        <a href="FinalSubmission" rel="noopener noreferrer">
          Skip & Submit
        </a>
      </div>
    </div>
  );
}
