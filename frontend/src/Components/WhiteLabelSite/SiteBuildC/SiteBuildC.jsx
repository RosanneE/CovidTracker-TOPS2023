import { useContext } from "react";
import "./SiteBuildC.css";
import statusBar from "../../../Images/SiteBuildStatusBarC.png";
import { FormContext } from "../../../Context/FormContext";
import CustomSite from "../CustomSite/CustomSite";
import ImageUploadLogo from "../ImageUpload/ImageUploadLogo";
import ImageUploadCover from "../ImageUpload/ImageUploadCover";
import ChangeSiteTheme from "./ChangeSiteTheme/ChangeSiteTheme";
import LeftArrow from "../../../Images/LeftArrow.png";
import RightArrow from "../../../Images/RightArrow.png";



export default function SiteBuildC({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  const handleThemeChange = (event) => {
    handlePartnerChange({
      target: { name: "color_theme", value: event.target.value },
    });
  };

  return (
    <>
      <div className="backtoPartnerPageC">
        <p onClick={() => setPageNumber(0)}>
          <img
            style={{ paddingRight: "0.5rem" }}
            src={LeftArrow}
            alt="Left arrow"
          />{" "}
          Back to Partner Page
        </p>
      </div>

      <div className="siteBuildHeaderC">
        <h1>Request a Stand-Alone Site </h1>
        <p className="siteBuildHeaderPC">
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
            style={{ cursor: "pointer", color: "#00426b", marginRight: "20px", textDecoration: 'underline' }}>
            Skip this step  {" "} <img
              style={{ paddingRight: "0.5rem" }}
              src={RightArrow}
              alt="Right arrow" />
          </p>
        </div>
        <div className="siteBuildCGrid">
          <div className="formLeftGrid">
            <div className="customSite">
              <CustomSite />
            </div>

            {/* ---------------color selection-------------------------*/}

            <ChangeSiteTheme handleThemeChange={handleThemeChange} />

          </div>

          {/* ------------right side inputs start here --------------*/}

          <div className="formRightGrid">
            <form action="">
              <div className="siteBuildFormLabel">
                <label htmlFor="imageUploadLogo" style={{ marginBottom: "10px" }}>Logo</label>
              </div>

              <div className="logoUpload">
                <ImageUploadLogo id="imageUploadLogo" />
              </div>
              <div className="siteBuildFormLabel">
                <label htmlFor="imageUploadCover">Cover Photo</label>
                <p className="siteBuildPC">
                  {/* ---------------- need to build a gallery? ------------- */}
                  Not sure where to start? <a href="/">Browse our gallery</a>
                </p>
                <div className="coverPhotoUpload">
                  <ImageUploadCover id="imageUploadCover" />
                </div>
              </div>

              <div className="siteBuildFormLabel">
                <label htmlFor="custom_message">Custom Message</label>
                <p className="siteBuildPC">
                  A quick message about your organization and mission
                </p>
              </div>
              <textarea
                rows="5"
                id="custom_message"
                name="custom_message"
                value={newSite.custom_message}
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
                placeholder="Sample Message: Our mission is 
                to protect and promote the health and well-being 
                of all Butte County residents."
              />

              <div className="siteBuildFormLabel">
                <label htmlFor="social_sharing_message">Social Sharing Message Message</label>
                <p className="siteBuildPC">This will appear whenever your site is shared</p>
              </div>

              <textarea
                rows="4"
                id="social_sharing_message"
                name="social_sharing_message"
                value={newSite.social_sharing_message}
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
                placeholder="Example:
                Spread the word- not COVID-19!
                Visit the site to join your community 
                in reporting your at-home test results. "
              />


              <div className="siteBuildContinueButtonC">
                <p
                  onClick={() => setPageNumber(pageNumber - 1)}
                  style={{ cursor: 'pointer', fontSize: '20px', color: '#00426b', textDecoration: 'underline' }}
                >
                  <img
                    style={{ paddingRight: "0.5rem" }}
                    src={LeftArrow}
                    alt="Left arrow"
                  />{" "} Go back
                </p>
                <button className="siteBuildBlueButtonC" onClick={() => setPageNumber(5)}>
                  Review & Submit &gt;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
