import React from "react";
import "./SiteBuildA.css"
import statusBar from "../../../Images/SiteBuildStatusBarA.png";


export default function SiteBuildA({ newSite, setNewSite, pageNumber, setPageNumber}) {
  function handleChange(evt){
    setNewSite(...newSite)
  }




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

      {/* ----------- FORM STARTS BELOW ---------------------  */}

      <div className="siteBuildForm">

        <div className="formHeader">
          <h2>Basic Information</h2>
        </div>


        <form action="">
          <div className="siteBuildFormLabel">
            <label htmlFor="contact_name">Contact Name:</label>
          </div>
          <input type="text" 
            id="contact_name"
            name="conact_name"
            value={newSite.contact_name}
            onChange={handleChange}
            className="siteBuildFormInput" 
          />


          <div className="siteBuildFormLabel">
            <label htmlFor="org_name">Organizatoin Name:</label>
          </div>
          <input type="text" 
            id="org_name"
            name="org_name"
            value={newSite.org_name}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />


          <div className="siteBuildFormLabel">
            <label htmlFor="email">Email</label>
          </div>
          <input type="text" 
            id="email"
            name="email"
            value={newSite.email}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />

          <div className="siteBuildFormLabel">
            <label htmlFor="site_origin">Site Origin</label>
            <p>Used to record where users come from</p>
          </div>
          <input type="text" 
            id="site_origin"
            name="site_origin"
            value={newSite.site_origin}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />

          <div className="siteBuildFormLabel">
            <label htmlFor="email">Home Link</label>
          </div>
          <input type="text" 
            id="home_link"
            name="home_link"
            value={newSite.home_link}
            onChange={handleChange}
            className="siteBuildFormInput"  
          />

          {/* ------------ buttons updated the pageNuber useState --------- */}
          <div className="siteBuildContinueButton">
            <p onClick={() => setPageNumber(pageNumber)}>{"\u003C"} Go back</p>
            <button className="siteBuildBlueButton" onClick={() => setPageNumber(1)}>Continue</button>
          </div>
        </form>
      </div>

    </>
  )
} 