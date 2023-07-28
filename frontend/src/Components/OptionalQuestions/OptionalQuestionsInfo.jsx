import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png";
import { Button } from "react-bootstrap";

export default function OptionalQuestionsInfo(props) {
  return (
    <div>
      <div className="questionsDiv">
        <div id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" />
          <h3>Optional Questions</h3>
        </div>
        <p style={{ textAlign: "left" }}>
          Help your community by answering the following optional-questions anonymously. Any
          data that is shared here will be anonymous and not tied to any information that
          identifies you individually.
        </p>

        <p style={{ textAlign: "left" }}>
          Data collected here through MakeMyTestCount is de-identified and sent to HHS Protect,
          a secure national database that also receives COVID-19 test results from labs and
          doctors’ offices. In addition, the data may be shared with researchers and support
          teams working on the MakeMyTestCount initiative.{" "}
        </p>

        <p style={{ textAlign: "left" }}>
          Public health teams at the state and local level can also get data from
          MakeMyTestCount and your anonymous data can help make important health decisions!
          Thank you for your help!
        </p>
      </div>
      <div className="nextButtonDiv">
        <Button id="optionalQuestionsNextButton" type="Next">
          Next
        </Button>
      </div>
      <a style={{ display: "block", marginBottom: "1.5rem" }} href="/">
        Skip & Submit
      </a>
    </div>
  );
}
