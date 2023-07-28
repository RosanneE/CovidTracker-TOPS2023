import { Button } from "react-bootstrap";

export default function FinalSubmission() {
  return (
    <div className="questionsDiv">
      <h3 className="optionalH3">Results Submitted</h3>
      <p
        className="optionalContactQuestion"
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
      >
        Your local community thanks you for submitting your test results!
      </p>
      <div className="nextButtonDiv">
        <Button id="optionalQuestionsNextButton" style={{ marginBottom: "5rem" }} type="text">
          Report another result
        </Button>
      </div>

      <h3 className="optionalH3">Next Steps</h3>
      <p className="optionalContactQuestion" style={{ marginTop: "1rem" }}>
        Negative is not a guarantee. If you just got infected, you may not have enough virus in
        your body for the test to find it. Plus, no test is perfect - there’s a very small
        chance that your result could simply be an error.
      </p>

      <h3 className="optionalH3">When To Test</h3>
      <div className="optionalContactQuestion" style={{ marginTop: "1rem" }}>
        <p>
          Have questions about COVID and how to protect yourself and your loved ones? Visit{" "}
          <a href="https://www.whentotest.org" target="_blank" rel="noopener noreferrer">
            WhenToTest.org
          </a>
          .
        </p>
        <ul>
          <li>Learn your personal COVID risk.</li>
          <li>Read tips on safely navigating everyday life.</li>
          <li>Get quick answers to frequently asked questions.</li>
        </ul>
      </div>

      <h3 className="optionalH3">Share</h3>
      <p className="optionalContactQuestion" style={{ marginTop: "1rem" }}>
        Share MakeMyTestCount with anyone who wants to make their test count
      </p>
    </div>
  );
}
