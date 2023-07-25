import React from "react";
import "./WhiteLabelingCSS/SiteBuildB.css";
import { useState } from "react"
import statusBar from "../../Images/SiteBuildStatusBarB.png"


export default function SiteBuildB() {
  const [newWebsite, setNewWebsite] = useState({
    contactName: "",
    organizationName: "",
    email: "",
    siteOrigin: "",
    homeLink: "",
    positiveTest: "",
    negativeTest: "",
    furtherInfo: "",
  });

  function handleChange(evt) {
    setNewWebsite({...newWebsite, [evt.target.name]: evt.target.value});
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return(
    <>

      <div className="bBacktoPartnerPage">
        <a href="#">{"\u003C"} Back to Partner Page </a>
      </div>

      <div className="bHeader">
        <h1>Request a Stand-Alone Site </h1>
        <p>
          After you submit this form our team will reach out to you to start the
          the process and clarify any additional details.
        </p>
        <img src={statusBar} alt="" />
        
      </div>
      
      <div className="bForm">
        <div className="formHeader">
          <h2>COVID-19 Resources</h2>
          <a href="#">Skip this step {"\u003E"}</a>
        </div>
        <form action="">
          <div className="bFormLabel">

            <label htmlFor="postiveTestLink">Positive-Test Link</label>
            <p> 
              If the user has tested positive, where can they find additional
              instructions? (if the field is left blank, users will be direct to
              the instructions page on MakeMyTestCount.org for users
              reporting postive results)
            </p>
          </div>
          <input type="text" 
            id="postiveTestLink"
            name="positiveTest"
            value={newWebsite.positiveTest}
            onChange={handleChange} 
          />
          <div className="bFormLabel">
            <label htmlFor="negativeTestLink">Negative-Test Link</label>
            <p>
              If the user has tested negative, where can they find additional instructions?
              (if this field is left blank, users will be directed to
              the instructions page on MakeMyTestCount.org for users reporting negative results.)
            </p>
          </div>
          <input type="text" 
            id="negativeTestLink"
            name="negativeTest"
            value={newWebsite.negativeTest}
            onChange={handleChange} 
          />
          <div className="bFormLabel">
            <label htmlFor="furtherInformation">Link to Further information about COVID-19</label>
            <p>
              Where can the user find additional information? 
              (if this field is left blank, users will be directed 
              to WhenToTest.org for further infomration about COVID-19.)

            </p>
          </div>
          <input type="text" 
            id="furtherInformation"
            name="furtherInfo"
            value={newWebsite.furtherInfo}
            onChange={handleChange} 
          />
          <div className="bContinueButton">
            <a href="#">{"\u003C"} Go back</a>
            <button className="blueButton">Continue</button>
          </div>
        </form>
      </div>

    </>
  )
} 