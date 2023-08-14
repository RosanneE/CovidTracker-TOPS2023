import React, { useContext } from "react";
import "./SiteBuildC.css";
import statusBar from "../../../Images/SiteBuildStatusBarC.png";
import { FormContext } from "../../../Context/FormContext";
import CustomSite from "../CustomSite/CustomSite";

export default function SiteBuildC({ pageNumber, setPageNumber, navigateToReviewAndSubmit }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  return (
    <>
      <div className="backtoPartnerPage">
        {/* don't forget to update this link before production */}
        <p onClick={() => setPageNumber(0)}>{"\u003C"} Back to Partner Page </p>
      </div>

      <div className="siteBuildHeaderC">
        <h1>Request a Stand-Alone Site </h1>
        <p className="siteBuildPC">
          After you submit this form our team will reach out to you to start the the process
          and clarify any additional details.
        </p>
        <img
          src={statusBar}
          alt=""
          style={{ maxWidth: "90%" }}
        />
      </div>

      <div className="siteBuildFormC">
        <div className="formHeaderC">
          <div className="formLeftHeader" >
            <h2 className="formHeaderH2C" >
              Customize Site Appearance
            </h2>
            <p className="formHeaderPC" >
              Customize your site’s appearance with your logo, custom text and branded imagery.
            </p>
          </div>
          <p onClick={() => setPageNumber(pageNumber + 1)}
            style={{ cursor: 'pointer', color: '#00426b', marginRight: '5px' }}>
            Skip this step {"\u003E"}
          </p>
        </div>
        <div className="siteBuildCGrid">
          <div className="formLeftGrid">
            <div className="customSite">
              <CustomSite />
            </div>
            <div className="colorSelction">
              <h1>THIS IS WHERE THE COLOR SELCTION WILL BE</h1>
            </div>
          </div>
        <div className="formRightGrid">
          <form action="">
            <div className="siteBuildFormLabel">
              <label htmlFor="postiveTestLink">Logo</label>

            </div>
            <input
              type="text"
              id="logo"
              name="logo"
              value={newSite.logo}
              onChange={handlePartnerChange}
              className="siteBuildFormInputC"
              />
            <div className="siteBuildFormLabel">
              <label htmlFor="negativeTestLink">Cover Photo</label>
              <p className="siteBuildPC">
                {/* ---------------- need to build a gallery? ------------- */}
                Not sure where to start? <a href="/">Browse our gallery</a>
              </p>
            </div>
            <input
              type="text"
              id="cover_photo"
              name="cover_photo"
              value={newSite.cover_photo}
              onChange={handlePartnerChange}
              className="siteBuildFormInputC"
              />
            <div className="siteBuildFormLabel">
              <label htmlFor="furtherInformation">Custom Message</label>
              <p className="siteBuildPC">A quick message about your organization and mission</p>
            </div>
            <input
              type="text"
              id="custom_message"
              name="custom_message"
              value={newSite.custom_message}
              onChange={handlePartnerChange}
              className="siteBuildFormInputC"
              />

            <div className="siteBuildFormLabel">
              <label htmlFor="furtherInformation">Social Sharing Message Message</label>
              <p className="siteBuildPC">This will appear whenever your site is shared</p>
            </div>
            <input
              type="text"
              id="social_sharing_message"
              name="social_sharing_message"
              value={newSite.social_sharing_message}
              onChange={handlePartnerChange}
              className="siteBuildFormInputC"
              />

            <div className="siteBuildContinueButtonC">
              <button className="siteBuildBlueButtonC" onClick={() => setPageNumber(5)}>
                Review & Submit
              </button>
              <p onClick={() => setPageNumber(pageNumber - 1)} style={{ cursor: 'pointer', color: '#00426b' }}>{"\u003C"} Go back</p>
            </div>
          </form>
        </div>
              </div>

      </div>
    </>
  );
}
