import { Form, Row, Col, Button } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalContact/OptionalContact.css";

export default function YesContactInfo({ demoPage, setDemoPage }) {
  const inputStyle = { marginBottom: "1.5rem", marginRight: "1rem" };

  return (
    <div className="yesContactInfoDiv">
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
          <p style={{ fontSize: "1.3rem" }}>
            Are you willing to share your contact information?
          </p>
          <p>
            Sharing additional information makes your response more impactful to public health
            teams in your community.
          </p>
        </div>
      </div>
      <Form>
        <Row>
          <Col style={inputStyle}>
            <Form.Group controlId="firstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control type="text" placeholder="Ex: John" />
            </Form.Group>
          </Col>
          <Col style={inputStyle}>
            <Form.Group controlId="middleName">
              <Form.Label className="form-label">Middle Name</Form.Label>
              <Form.Control type="text" placeholder="Ex: Jacob" />
            </Form.Group>
          </Col>
          <Col style={inputStyle}>
            <Form.Group controlId="lastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control type="text" placeholder="Ex: Smith" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="streetAddress" style={inputStyle}>
          <Form.Label className="form-label">Street Address</Form.Label>
          <Form.Control type="text" placeholder="Ex: 1234 Talman St." />
        </Form.Group>
        <Row>
          <Col style={inputStyle}>
            <Form.Group controlId="city">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control type="text" placeholder="Ex: Denver" />
            </Form.Group>
          </Col>
          <Col style={inputStyle}>
            <Form.Group controlId="state">
              <Form.Label className="form-label">State</Form.Label>
              <Form.Control type="text" placeholder="Ex: Colorado" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email" style={inputStyle}>
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control type="email" placeholder="Ex: Johnjacob.smith@makemytestcount.org" />
        </Form.Group>
        <Form.Group controlId="phoneNumber" style={inputStyle}>
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Ex: (123) 456 -7890" />
        </Form.Group>
        <Form.Group controlId="dob" style={inputStyle}>
          <Form.Label className="form-label">Date of Birth</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Form>
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
        <a href="your-link-here" rel="noopener noreferrer">
          Skip & Submit
        </a>
      </div>
    </div>
  );
}
