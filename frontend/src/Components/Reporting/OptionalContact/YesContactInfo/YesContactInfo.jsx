import React, { useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalContact/OptionalContact.css";
import { FormContext } from "../../../../Context/FormContext";

export default function YesContactInfo({ demoPage, setDemoPage }) {
  const inputStyle = { marginBottom: "1.5rem", marginRight: "1rem" };
  const { newUser, handleUserChange, handleUserSubmit } = useContext(FormContext);

  const handleSkipAndSubmit = (event) => {
    handleUserSubmit(event);
    setDemoPage(10); // Redirects to the desired page
  };

  return (
    <div>
  <div className="optionalArrow">
    <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
  </div>
      <div className="questionsDiv">
        <h3 className="question2">
          Optional Contact Info
        </h3><br/><br/>

        <div className="leftAlign"
          style={{ textAlign: "center", marginTop: "1rem !important", marginBottom: "2rem" }}
        >
          <p className="smallFont" style={{ fontSize: "1.5rem" }}>
            Are you willing to share your contact information?<br/><br/>
          </p>
          <p className="italic" style={{fontFamily: "Noto Sans", fontSize: "1.125rem"}}>
            Sharing additional information makes your response more impactful<br/> to public health teams in your community.<br/><br/>
          </p>
        </div>
      </div>
      <Form className="contactInfoForm" style={{ width: "40rem", margin: "0 auto", textAlign: "left", fontWeight: "400"}}>
        <Row>
          <Col className="contactCol" style={inputStyle}>
            <Form.Group controlId="firstName">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                placeholder="Ex: John"
                value={newUser.first_name || ""}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Col>
          <Col className="contactCol" style={inputStyle}>
            <Form.Group controlId="middleName">
              <Form.Label className="form-label">Middle Initial</Form.Label>
              <Form.Control
                type="text"
                name="middle_initial"
                placeholder="Ex: J"
                value={newUser.middle_initial || ""}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Col>
          <Col className="contactCol" style={inputStyle}>
            <Form.Group controlId="lastName">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                placeholder="Ex: Smith"
                value={newUser.last_name || ""}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="streetAddress" style={inputStyle}>
          <Form.Label className="form-label">Street Address</Form.Label>
          <Form.Control
            type="text"
            name="street_address"
            placeholder="Ex: 1234 Talman St."
            value={newUser.street_address || ""}
            onChange={handleUserChange}
          />
        </Form.Group>
        <Row>
          <Col style={inputStyle}>
            <Form.Group controlId="city">
              <Form.Label className="form-label">City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Ex: Denver"
                value={newUser.city || ""}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Col>
          <Col style={inputStyle}>
            <Form.Group controlId="state">
              <Form.Label className="form-label">State</Form.Label>
              <Form.Control
                type="text"
                name="state"
                placeholder="Ex: Colorado"
                value={newUser.state || ""}
                onChange={handleUserChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="email" style={inputStyle}>
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Ex: jjsmith@makemytestcount.org"
            value={newUser.email || ""}
            onChange={handleUserChange}
          />
        </Form.Group>
        <Form.Group controlId="phoneNumber" style={inputStyle}>
          <Form.Label className="form-label">Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone_number"
            placeholder="Ex: (123) 456 -7890"
            value={newUser.phone_number || ""}
            onChange={handleUserChange}
          />
        </Form.Group>
      </Form>
      <div className="nextButtonDiv">
        <Button
          id="optionalQuestionsNextButton"
          style={{ border: "3px solid #8A8A8A" }}
          type="Next"
          onClick={handleSkipAndSubmit}
        >
          Next
        </Button>
      </div>
      <div className="skipSubmit" style={{ display: "block", marginBottom: "13rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline", color: "#0058B7", fontWeight: "500"}}
          onClick={handleSkipAndSubmit}
        >
          Skip & Submit
        </span>
      </div>
    </div>
  );
}
