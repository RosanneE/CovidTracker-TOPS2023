import React, { useContext } from "react";
import "./SiteBuildC.css"
import statusBar from "../../../Images/SiteBuildStatusBarC.png";
import { FormContext } from "../../../Context/FormContext";


export default function SiteBuildC({pageNumber, setPageNumber, navigateToReviewAndSubmit }) {
  const { newSite, handleChange } = useContext(FormContext);

  return(
    <>

      <div className="backtoPartnerPage">
        {/* don't forget to update this link before production */}
        <a href="http://localhost:3000/PartnerWhiteLabel">{"\u003C"} Back to Partner Page </a>
      </div>

      <div className="siteBuildHeader">
        <h1>Request a Stand-Alone Site </h1>
        <p className="siteBuildP">
          After you submit this form our team will reach out to you to start the
          the process and clarify any additional details.
        </p>
        <img src={statusBar} alt="" style={{maxWidth:"100%", width:"40.25rem", margin:"2rem"}} />
        
      </div>
      
      <div className="siteBuildForm">
        <div className="formHeader">
          <h2>Customize Site Appearence</h2>
          <a href="#">Skip this step {"\u003E"}</a>
        </div>
        <div className="siteBuildCGrid">

        
          <form action="">
            <div className="siteBuildFormLabel">

              <label htmlFor="postiveTestLink">Logo</label>
              <p className="siteBuildP"> 
                If the user has tested positive, where can they find additional
                instructions? (if the field is left blank, users will be direct to
                the instructions page on MakeMyTestCount.org for users
                reporting postive results)
              </p>
            </div>
            <input type="text" 
              id="logo"
              name="logo"
              value={newSite.logo}
              onChange={handleChange}
              className="siteBuildFormInput" 
            />
            <div className="siteBuildFormLabel">
              <label htmlFor="negativeTestLink">Cover Photo</label>
              <p className="siteBuildP">
                  Not sure where to start?  <a href="#">Browse our gallery</a>
              </p>
            </div>
            <input type="text" 
              id="cover_photo"
              name="cover_photo"
              value={newSite.cover_photo}
              onChange={handleChange}
              className="siteBuildFormInput"  
            />
            <div className="siteBuildFormLabel">
              <label htmlFor="furtherInformation">Custom Message</label>
              <p className="siteBuildP">
                  A quick message about your organization and mission
              </p>
            </div>
            <input type="text" 
              id="custom_message"
              name="custom_message"
              value={newSite.custom_message}
              onChange={handleChange}
              className="siteBuildFormInput"  
            />

            <div className="siteBuildFormLabel">
              <label htmlFor="furtherInformation">Social Sharing Message Message</label>
              <p className="siteBuildP">
                  This wil appear whenever your site is shared
              </p>
            </div>
            <input type="text" 
              id="social_sharing_message"
              name="social_sharing_message"
              value={newSite.social_sharing_message}
              onChange={handleChange}
              className="siteBuildFormInput"  
            />





            <div className="siteBuildContinueButton">
            <p onClick={() => setPageNumber(pageNumber - 1)}>{"\u003C"} Go back</p>
              {/* <button className="siteBuildBlueButton" onClick={() => setPageNumber(3)}>Continue</button> */}
              <button className="siteBuildBlueButton" onClick={()=>navigateToReviewAndSubmit()}>Continue</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
} 