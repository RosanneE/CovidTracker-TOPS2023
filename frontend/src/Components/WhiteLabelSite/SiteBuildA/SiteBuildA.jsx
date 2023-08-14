import React, { useContext } from "react";
import "./SiteBuildA.css";
import statusBar from "../../../Images/SiteBuildStatusBarA.png";
import { FormContext } from "../../../Context/FormContext";

export default function SiteBuildA({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  return (
    <>
      <div className="backtoPartnerPageA">
        {/* don't forget to update this link before production */}
        <p onClick={()=> setPageNumber(0)}>{"\u003C"} Back to Partner Page </p>
      </div>

      <div className="siteBuildHeaderA">
        <h1>Request a Stand-Alone Site </h1>
        <p className="headerPA">
          After you submit this form our team will reach out to you to start the the process
          and clarify any additional details.
        </p>
        <img
          src={statusBar}
          alt=""
          style={{ maxWidth: "90%"}}
        />
      </div>

      {/* ----------- FORM STARTS BELOW ---------------------  */}
      <div className="siteBuildMiddleA">
        <div className="siteBuildFormA">
          <div className="formHeaderA">
            <h2>Basic Information</h2>
          </div>

          <form action="">
            <div className="siteBuildFormLabelA">
              <label htmlFor="contact_name" id="contact_name_label">
                Contact Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              value={newSite.contact_name}
              onChange={handlePartnerChange}
              className="siteBuildFormInputA"
              placeholder="Example: Mark Johnson"
            />

            <div className="siteBuildFormLabelA">
              <label htmlFor="org_name" id ="org_name_label">
                Organization Name<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <input
              type="text"
              id="org_name"
              name="org_name"
              value={newSite.org_name}
              onChange={handlePartnerChange}
              className="siteBuildFormInputA"
              placeholder="Example: ABC County Health Department"
            />

            <div className="siteBuildFormLabelA">
              <label htmlFor="email" id ="email_label">
                Email<span style={{ color: "red" }}>*</span>
              </label>
            </div>
            <input
              type="text"
              id="email"
              name="email"
              value={newSite.email}
              onChange={handlePartnerChange}
              className="siteBuildFormInputA"
              placeholder="Example: health@abccounty.com"
            />

            <div className="siteBuildFormLabelA">
              <label htmlFor="site_origin" id ="site_origin_label">Site Origin</label>
              <p id ="site_origin_paragraph">Used to record where users come from</p>
            </div>
            <input
              type="text"
              id="site_origin"
              name="site_origin"
              value={newSite.site_origin}
              onChange={handlePartnerChange}
              className="siteBuildFormInputA"
              placeholder="Example: http://mysite.com"
            />

            <div className="siteBuildFormLabelA">
              <label htmlFor="email" id ="home_link_label">Home Link</label>
              <p id ="home_link_paragraph">
                Users of your stand-alone site who click on your logo will be directed to this
                URL
              </p>
            </div>
            <input
              type="text"
              id="home_link"
              name="home_link"
              value={newSite.home_link}
              onChange={handlePartnerChange}
              className="siteBuildFormInputA"
              placeholder="Example: ABC County Health Department"
            />

            {/* ------------ buttons updated the pageNuber useState --------- */}
            <div className="siteBuildContinueButtonA">
              <p onClick={() => setPageNumber(pageNumber - 1)} style={{cursor: 'pointer', color: '#00426b'}}>{"\u003C"} Go back</p>
              <button className="siteBuildBlueButtonA" id="siteBuildBlueButtonA" onClick={() => setPageNumber(3)}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
