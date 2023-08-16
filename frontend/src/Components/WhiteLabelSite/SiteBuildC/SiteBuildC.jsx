import React, { useContext, useState } from "react";
import "./SiteBuildC.css";
import statusBar from "../../../Images/SiteBuildStatusBarC.png";
import bright from "../../../Images/customeSiteBriteColor.png";
import deep from "../../../Images/customSiteDeepColor.png";
import classic from "../../../Images/customeSiteClassicColor.png";
import clean from "../../../Images/customeSiteCleanColor.png";
import natural from "../../../Images/customSiteNaturalColor.png";
import { FormContext } from "../../../Context/FormContext";
import CustomSite from "../CustomSite/CustomSite";
import ImageUpload from "../CustomSite/ImageUpload/ImageUpload";
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { Storage } from 'aws-amplify';

export default function SiteBuildC({ pageNumber, setPageNumber, navigateToReviewAndSubmit }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);
  const [siteTheme, setSiteTheme] = useState("classic");

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setSiteTheme(selectedTheme);
  };

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
        <img src={statusBar} alt="" style={{ maxWidth: "90%" }} />
      </div>

      <div className="siteBuildFormC">
        <div className="formHeaderC">
          <div className="formLeftHeader">
            <h2 className="formHeaderH2C">Customize Site Appearance</h2>
            <p className="formHeaderPC">
              Customize your site’s appearance with your logo, custom text and branded imagery.
            </p>
          </div>
          <p
            onClick={() => setPageNumber(pageNumber + 1)}
            style={{ cursor: "pointer", color: "#00426b", marginRight: "5px" }}
          >
            Skip this step {"\u003E"}
          </p>
        </div>
        <div className="siteBuildCGrid">
          <div className="formLeftGrid">
            <div className="customSite">
              <CustomSite siteTheme={siteTheme} />
            </div>

            {/* ---------------color selection-------------------------*/}

            <div class="colorSelection">
              <div class="radioOption">
                <label>
                  <img src={classic} alt="Classic" />
                  Classic
                  <input
                    type="radio"
                    name="color"
                    checked={siteTheme === "classic"}
                    value="classic"
                    onChange={handleThemeChange}
                  />
                </label>
              </div>

              <div class="radioOption">
                <label>
                  <img src={clean} alt="Clean" />
                  Clean
                  <input
                    type="radio"
                    name="color"
                    value="clean"
                    onChange={handleThemeChange}
                  />
                </label>
              </div>

              <div class="radioOption">
                <label>
                  <img src={bright} alt="Bright" />
                  Bright
                  <input
                    type="radio"
                    name="color"
                    value="bright"
                    onChange={handleThemeChange}
                  />
                </label>
              </div>

              <div class="radioOption">
                <label>
                  <img src={deep} alt="Deep" />
                  Deep
                  <input type="radio" name="color" value="deep" onChange={handleThemeChange} />
                </label>
              </div>

              <div class="radioOption">
                <label>
                  <img src={natural} alt="Natural" />
                  Natural
                  <input
                    type="radio"
                    name="color"
                    value="natural"
                    onChange={handleThemeChange}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* ------------right side inputs start here --------------*/}
          <div className="formRightGrid">
            <form action="">
              <div className="siteBuildFormLabel">
                <label htmlFor="postiveTestLink">Logo</label>
              </div>
              <input
                type="file"
                id="logo"
                name="logo"
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
                type="file"
                id="cover_photo"
                name="cover_photo"
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
              />
              <div className="siteBuildFormLabel">
                <label htmlFor="furtherInformation">Custom Message</label>
                <p className="siteBuildPC">
                  A quick message about your organization and mission
                </p>
              </div>
              <textarea
                type="text"
                rows="5"
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
              <textarea
                type="text"
                rows="4"
                id="social_sharing_message"
                name="social_sharing_message"
                value={newSite.social_sharing_message}
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
              />

              <div className="siteBuildContinueButtonC">
                <p
                  onClick={() => setPageNumber(pageNumber - 1)}
                  style={{ cursor: "pointer", color: "#00426b" }}
                >
                  {"\u003C"} Go back
                </p>
                <button className="siteBuildBlueButtonC" onClick={() => setPageNumber(5)}>
                  Review & Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ImageUpload />
    </>
  );
}
