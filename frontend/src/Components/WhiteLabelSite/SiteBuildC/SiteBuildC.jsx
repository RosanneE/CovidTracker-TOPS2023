import { useContext, useState } from "react";
import "./SiteBuildC.css";
import statusBar from "../../../Images/SiteBuildStatusBarC.png";
import { FormContext } from "../../../Context/FormContext";
import CustomSite from "../CustomSite/CustomSite";
import ImageUploadLogo from "../ImageUpload/ImageUploadLogo";
import ImageUploadCover from "../ImageUpload/ImageUploadCover";
import ChangeSiteTheme from "./ChangeSiteTheme/ChangeSiteTheme";

const BUTTE_COUNTY_LOGO = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/563797ae-11e1-4959-92a1-bbf329840028.image"
const COVER_PHOTO_DEFAULT = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/52a55cbb-abeb-4dab-9c26-661ee0e9b5d6.image"

export default function SiteBuildC({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);
  const [siteTheme, setSiteTheme] = useState("classic");
  const [logoUrl, setlogoUrl ] = useState(BUTTE_COUNTY_LOGO);
  const [coverPhoto, setCoverPhoto] = useState(COVER_PHOTO_DEFAULT)

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setSiteTheme(selectedTheme);
    handlePartnerChange({
      target: { name: "color_theme", value: event.target.value },
    });
  };

  return (
    <>
      <div className="backtoPartnerPage">
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
              <CustomSite siteTheme={siteTheme} 
              logoUrl={logoUrl} 
              coverPhoto={coverPhoto} setCoverPhoto={setCoverPhoto} />
            </div>

            {/* ---------------color selection-------------------------*/}

            <ChangeSiteTheme handleThemeChange={ handleThemeChange } siteTheme={siteTheme} />

          </div>

          {/* ------------right side inputs start here --------------*/}

          <div className="formRightGrid">
            <form action="">
              <div className="siteBuildFormLabel">
                <label htmlFor="imageUploadLogo" style={{ marginBottom: "10px" }}>Logo</label>
              </div>
              {/* <input
                type="file"
                id="logo"
                name="logo"
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
              /> */}
              <div className="logoUpload">
                <ImageUploadLogo setlogoUrl={setlogoUrl} id="imageUploadLogo" />
              </div>
              <div className="siteBuildFormLabel">
                <label htmlFor="imageUploadCover">Cover Photo</label>
                <p className="siteBuildPC">
                  {/* ---------------- need to build a gallery? ------------- */}
                  Not sure where to start? <a href="/">Browse our gallery</a>
                </p>
              <div className="coverPhotoUpload">
                <ImageUploadCover setCoverPhoto={setCoverPhoto} id="imageUploadCover" />
              </div>
              </div>
              {/* <input
                type="file"
                id="cover_photo"
                name="cover_photo"
                onChange={handlePartnerChange}
                className="siteBuildFormInputC"
              /> */}
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
    </>
  );
}
