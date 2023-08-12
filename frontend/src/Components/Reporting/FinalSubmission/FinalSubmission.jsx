import { Row, Col } from "react-bootstrap";
import InstagramIcon from "../../../Images/InstagramIcon.png";
import FacebookIcon from "../../../Images/FacebookIcon.png";
import TwitterIcon from "../../../Images/TwitterIcon.png";
import PlusIcon from "../../../Images/PlusIcon.png";
import backArrow from "../../../Images/Button - Back to Step 2.png";

export default function FinalSubmission({ demoPage, setDemoPage }) {
  const iconStyle = {
    width: "4.25rem",
    height: "4.25rem",
    marginBottom: "4rem",
  };

  return (
    <div className="questionsDiv">
      <div>
      <div className="optionalArrow">
    <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
  </div>
        <h3 className="question2">
          Results Submitted!
        </h3><br/><br/>
      </div>
      <p
        className="optionalH3"
        style={{
          marginBottom: "3rem",
          marginTop: "0.5rem",
          color: "#00426B",
          fontWeight: "500",
          fontSize: "1.3rem",
        }}
      >
        Your local community thanks you for submitting your test results!<br/><br/>
      </p>
      <div style={{ width: "36.5625rem", marginLeft: "auto", marginRight: "auto"}}>
      <h3 style={{ marginBottom: "1rem" }} className="optionalH3">
        Next Steps<br/><br/>
      </h3>
      <p className="optionalContactQuestion" style={{ marginTop: "1rem", color: "#00426B" }}>
        Negative is not a guarantee. If you just got infected, you may not have enough virus in
        your body for the test to find it. Plus, no test is perfect - there’s a very small
        chance that your result could simply be an error.
      </p>
      <div
        className="optionalContactQuestion"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          color: "#00426B",
          border: "1px solid",
          borderRadius: "0.625rem",
          padding: "1rem",
          height: "1.6rem"
        }}
      >
        If you have COVID symptoms
        <img style={{ width: "2rem" }} src={PlusIcon} alt="plus sign" />
      </div>
      <div
        className="optionalContactQuestion"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
          color: "#00426B",
          border: "1px solid",
          borderRadius: "0.625rem",
          padding: "1rem",
          height: "1.6rem"
        }}
      >
        If you’ve been exposed to someone with COVID
        <img style={{ width: "2rem" }} src={PlusIcon} alt="plus sign" />
      </div>
        <br/><br/>
      <h3 className="optionalH3">Testing Journal</h3>
      <div className="optionalContactQuestion" style={{ marginTop: "1rem", color: "#00426B" }}>
        <p>
        <table>
          <tr><td style={{textAlign: "left"}}>Positive</td>
          <td style={{textAlign: "right"}}>5/20/2023</td></tr>
        </table><br/><br/>
        </p>
      </div>


      <h3 className="optionalH3">When To Test</h3>
      <div className="optionalContactQuestion" style={{ marginTop: "1rem", color: "#00426B" }}>
        <p>
          Have questions about COVID and how to protect yourself and your loved ones? Visit{" "}
          <a style={{color: "#00426B"}} className="whenToTestLink" href="https://www.whentotest.org" target="_blank" rel="noopener noreferrer">
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
<br/><br/>
      <h3 className="optionalH3">Share</h3>

      <p
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          color: "#00426B",
          fontFamily: "Noto Sans",
          fontSize: "1.125rem",
        }}
      >
        Share MakeMyTestCount.org with members of your community.<br/><br/>
      </p>
      <div
        className="socialMediaIconsDiv"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Row>
          <Col>
            <img src={InstagramIcon} alt="Instagram" style={iconStyle} />
          </Col>
          <Col>
            <img src={FacebookIcon} alt="Facebook" style={iconStyle} />
          </Col>
          <Col>
            <img src={TwitterIcon} alt="Twitter" style={iconStyle} />
          </Col>
          <Col>
            <img src={PlusIcon} alt="Plus" style={iconStyle} />
          </Col>
        </Row>
      </div>
      </div>
    </div>
  );
}
