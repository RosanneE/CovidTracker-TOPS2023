import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalContact/OptionalContact.css";

export default function OptionalContactInfo({ demoPage, setDemoPage }) {
  return (
    <div>
    <div className="optionalArrow">
    <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
  </div>
      <div className="questionsDiv">
        <h3 className="question2">
          Optional Contact Info
        </h3>

        <div className="leftAlign"
          style={{ textAlign: "center", marginTop: "1rem !important", marginBottom: "2rem" }}
        >
          <p className="smallFont" style={{ fontSize: "1.5rem" }}><br/><br/>
            Are you willing to share your contact information?<br/><br/></p>
            <p className="italic" style={{ fontSize: "1.125rem", fontFamily: "Noto Sans" }}>
            Sharing additional information makes your response more impactful<br/> to public health teams in your community.
          </p>
        </div>
      </div>
      <div className="nextButtonDiv">
        <Button
          id="optionalQuestionsNextButton"
          style={{ border: "3px solid #8A8A8A" }}
          type="Next"
          onClick={() => setDemoPage(demoPage + 1)}
        >
          Yes
        </Button>
      </div>
      <div className="skipSubmit" style={{ display: "block", marginBottom: "13rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline", color: "#0058B7", fontWeight: "500"}}
          onClick={() => setDemoPage(10)}
        >
          Skip & Submit
        </span>
      </div>
    </div>
  );
}
