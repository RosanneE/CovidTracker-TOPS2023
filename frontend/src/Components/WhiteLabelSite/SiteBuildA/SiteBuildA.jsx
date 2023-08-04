import React, { useContext } from "react";
import "./SiteBuildA.css";
import statusBar from "../../../Images/SiteBuildStatusBarA.png";
import { FormContext } from "../../../Context/FormContext";

export default function SiteBuildA({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  return (
    <>
      <div className="backtoPartnerPage">
        {/* don't forget to update this link before production */}
        <a href="http://localhost:3000/PartnerWhiteLabel">{"\u003C"} Back to Partner Page </a>
      </div>

      <div className="siteBuildHeader">
        <h1>Request a Stand-Alone Site </h1>
        <p className="siteBuildP">
          After you submit this form our team will reach out to you to start the the process
          and clarify any additional details.
        </p>
        <img
          src={statusBar}
          alt=""
          style={{ maxWidth: "100%", width: "40.25rem", margin: "2rem" }}
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
              <label htmlFor="contact_name">
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
              <label htmlFor="org_name">
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
              <label htmlFor="email">
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
              <label htmlFor="site_origin">Site Origin</label>
              <p>Used to record where users come from</p>
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
              <label htmlFor="email">Home Link</label>
              <p>
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
              <p onClick={() => setPageNumber(pageNumber - 1)}>{"\u003C"} Go back</p>
              <button className="siteBuildBlueButton" onClick={() => setPageNumber(3)}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
