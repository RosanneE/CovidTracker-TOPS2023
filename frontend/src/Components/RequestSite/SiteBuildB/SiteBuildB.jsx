import React from "react";
import "./SiteBuildB.css"
import statusBar from "../../../Images/SiteBuildStatusBarB.png";


export default function SiteBuildB(setNewSite, newSite) {
  function handleChange(evt){
    setNewSite(...newSite)
  }




  return(
    <>

      <div className="backtoPartnerPage">
        <a href="#">{"\u003C"} Back to Partner Page </a>
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
          <h2>COVID-19 Resources</h2>
          <a href="#">Skip this step {"\u003E"}</a>
        </div>
        <form action="">
          <div className="siteBuildFormLabel">

            <label htmlFor="postiveTestLink">Positive-Test Link</label>
            <p className="siteBuildP"> 
              If the user has tested positive, where can they find additional
              instructions? (if the field is left blank, users will be direct to
              the instructions page on MakeMyTestCount.org for users
              reporting postive results)
            </p>
          </div>
          <input type="text" 
            id="postiveTestLink"
            name="positiveTest"
            value={newSite.positiveTest}
            onChange={handleChange}
            className="siteBuildFormInput" 
          />
          <div className="siteBuildFormLabel">
            <label htmlFor="negativeTestLink">Negative-Test Link</label>
            <p className="siteBuildP">
              If the user has tested negative, where can they find additional instructions?
              (if this field is left blank, users will be directed to
              the instructions page on MakeMyTestCount.org for users reporting negative results.)
            </p>
          </div>
          <input type="text" 
            id="negativeTestLink"
            name="negativeTest"
            value={newSite.negativeTest}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />
          <div className="siteBuildFormLabel">
            <label htmlFor="furtherInformation">Link to Further information about COVID-19</label>
            <p className="siteBuildP">
              Where can the user find additional information? 
              (if this field is left blank, users will be directed 
              to WhenToTest.org for further infomration about COVID-19.)

            </p>
          </div>
          <input type="text" 
            id="furtherInformation"
            name="furtherInfo"
            value={newSite.furtherInfo}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />
          <div className="siteBuildContinueButton">
            <a href="#">{"\u003C"} Go back</a>
            <button className="siteBuildBlueButton">Continue</button>
          </div>
        </form>
      </div>

    </>
  )
} 