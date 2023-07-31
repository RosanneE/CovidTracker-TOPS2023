import React, { useContext, useState } from "react";
import ReviewAndSubmitPic from "../../../Images/ReviewAndSubmitPic.png";
import LeftArrow from "../../../Images/LeftArrow.png";
import "../ReviewAndSubmit/ReviewAndSubmit.css"
import { FormContext } from "../../../Context/FormContext";


function ReviewAndSubmit({pageNumber, setPageNumber}) {
  // const [contactInfo, setContactInfo] = useState({
  //   email: "",
  //   phone: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setContactInfo({
  //     ...contactInfo,
  //     [name]: value,
  //   });
  // }

  const { newSite, handleChange, handleSubmit } =useContext(FormContext)
//   function handleSubmit(event) {
//     event.preventDefault();
//   }

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
          className="reviewAndSubmitInput"
          type="text"
          name="contactName"
          value={newSite.contact_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Organization Name</label>
        <input
          className="reviewAndSubmitInput"
          type="text"
          name="org_name"
          value={newSite.org_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          className="reviewAndSubmitInput"
          type="email"
          name="email"
          value={newSite.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Home Link</label>
        <input
          className="reviewAndSubmitInput"
          type="text"
          name="home_link"
          value={newSite.email}
          onChange={handleChange}
        />
      </div>
      </div>
      <div className="goBackSubmit">
        <div className="goBack">
        
        <p onClick={() => setPageNumber(pageNumber - 1)}>
          <img style={{paddingRight:"0.5rem"}} src={LeftArrow} alt="Left arrow"/> Go Back
        </p>
        
        </div>
        <button style={{marginRight:"none"}}className="blueButton dissolveEffect" onClick={(event)=>handleSubmit(event)}>Submit request</button>
      </div>
      
    </div>
    </td>
    <td><img style={{maxWidth:"100%", width:"50rem"}}src={ReviewAndSubmitPic} alt="Review And Submit pic"/></td>
    </tr>
    </table>
  );
}

export default ReviewAndSubmit;