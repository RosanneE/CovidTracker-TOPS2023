import React, { useState } from "react";
import ReviewAndSubmitPic from "../../Images/ReviewAndSubmitPic.png";
import LeftArrow from "../../Images/LeftArrow.png";

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
    <table>
        <tr>
            <td>
    <div>
      <h1>Review & Submit</h1>
      <h2>Please review your contact information</h2>
      <a href="/">Edit info</a>
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
      <div>
        <p><img src={LeftArrow} alt="Left arrow"/>
        <a href="/">Go back</a></p>
        <button className="blueButton dissolveEffect">Submit request</button>
      </div>
      
    </div>
    </td>
    <td><img src={ReviewAndSubmitPic} alt="Review And Submit pic"/></td>
    </tr>
    </table>
  );
}

export default ReviewAndSubmit;