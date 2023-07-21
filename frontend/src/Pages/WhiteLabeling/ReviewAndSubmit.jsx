import React, { useState } from "react";
import ReviewAndSubmitPic from "../../Images/ReviewAndSubmitPic.png";
import LeftArrow from "../../Images/LeftArrow.png";
import "./WhiteLabelingCSS/ReviewAndSubmit.css"

function ReviewAndSubmit() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
  });
  const [testResult, setTestResult] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setContactInfo({
      ...contactInfo,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <table className="reviewAndSubmit">
        <tr>
            <td>
    <div>
    <div className="reviewAndSubmitDiv">
      <h3>Review & Submit</h3>
      <p>Please review your contact information</p>
      <p style={{textAlign:'right'}}><a  href="/">Edit info</a></p>
      
      <div>
        <label>Contact Name</label>
        <input
          type="text"
          name="contactName"
          value={contactInfo.contactName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Organization Name</label>
        <input
          type="text"
          name="org_name"
          value={contactInfo.org_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contactInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Home Link</label>
        <input
          type="text"
          name="home_link"
          value={contactInfo.email}
          onChange={handleChange}
        />
      </div>
      </div>
      <div className="goBack">
        <p><img src={LeftArrow} alt="Left arrow"/>
        <a href="/">Go back</a></p>
        <button className="blueButton dissolveEffect">Submit request</button>
      </div>
      
    </div>
    </td>
    <td><img style={{maxWidth:"100%", width:"50rem"}}src={ReviewAndSubmitPic} alt="Review And Submit pic"/></td>
    </tr>
    </table>
  );
}

export default ReviewAndSubmit;