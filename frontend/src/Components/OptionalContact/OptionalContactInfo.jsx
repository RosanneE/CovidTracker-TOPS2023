import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png";
import { Button } from "react-bootstrap";

export default function OptionalQuestionsInfo(props) {
  return (
    <div>
      <div className="questionsDiv">
        <div id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" />
          <h3>Optional Contact Info</h3>
        </div>
      </div>
    </div>
  );
}
