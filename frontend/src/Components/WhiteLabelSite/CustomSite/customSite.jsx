import "../CustomSite/CustomSite.css";
import { useContext, useState, useEffect } from "react";
import { FormContext } from "../../../Context/FormContext";
// import inspectingResults from "../../../Images/Inspecting_results.png";
import CustomeSiteFooter from "./CustomeSiteFooter/CustomSiteFooter";


const CustomSite = () => {
  const { newSite } = useContext(FormContext);


  const [textColor, setTextColor] = useState('#1f304f');
  const [h1Color, setH1Color] = useState('')
  const [headerTextColor, setHeaderTextColor] = useState('')
  const [buttonColor, setButtonColor] = useState('#E7F4F8')
  const [headerColor, setHeaderColor] = useState('#00426B')

  useEffect(() => {
    function miniColorChange(siteTheme) {
      if (siteTheme === 'classic') {
        setTextColor('#00426B')
        setH1Color("#00426B")
        setHeaderTextColor('#00426B')
        setButtonColor('#0058B7')
        setHeaderColor('#E7F4F8');
      }
      if (siteTheme === 'clean') {
        setTextColor('rgba(56, 56, 56, 0.8)')
        setH1Color('#32009B')
        setHeaderTextColor('#545454')
        setButtonColor('#6D71D7')
        setHeaderColor('rgba(217, 217, 217, 0.3)');
      }
      if (siteTheme === 'bright') {
        setTextColor('#333333')
        setH1Color('#333333')
        setHeaderTextColor("#FFFFFF")
        setButtonColor('#013D80')
        setHeaderColor('#F48400');
      }
      if (siteTheme === 'deep') {
        setTextColor('#00426B')
        setH1Color("#333333")
        setHeaderTextColor("#333333")
        setButtonColor('#75043A')
        setHeaderColor('rgba(51, 51, 51, 0.12)');
      }
      if (siteTheme === 'natural') {
        setTextColor('#4C4C4C')
        setH1Color('#4C4C4C')
        setHeaderTextColor('#4C4C4C')
        setButtonColor('#9EB1A9')
        setHeaderColor('#E7F4F8');
      }
    }
    miniColorChange(newSite.color_theme);
  }, [setTextColor, newSite.color_theme]);



  return (
    <div className="miniSite">
      
      {/* Header - Organization name is custom */}

      <div id="miniSiteHeader" >
        <img className="miniSiteHeaderImg" src={newSite.logo} alt="Your Logo Goes Here" />
        <h4 style={{ color: h1Color }}>
          {newSite.org_name
            ? newSite.org_name
            : "Butte County Department of Health"}
        </h4>
        <h4 style={{ color: h1Color }}>Español +</h4>
      </div>
      <div id="sub-header" style={{ backgroundColor: headerColor }}>
        <h5 style={{ color: headerTextColor }}>Report COVID at-home test results to help your community.</h5>
        <p style={{ color: headerTextColor }}>
          You can report negative or positive tests for yourself or any member
          of your family.
        </p>
      </div>

      {/* Body is from ReqQuestion1 
      Custom message is in body below buttons*/}
      <div id="customSite-body">
        <div id="customSite-leftside">
          <div className="questionAnswerCustom">

            <span className="customSiteQuestion">
              <p style={{ color: h1Color, margin: 0 }}> What was your</p>
              <p style={{ color: h1Color }}>at-home test result?</p>
            </span>

            <div className="customSiteButtons">
              <button className="positiveNegativeCustom dissolveEffectCustom" style={{ pointerEvents: "none", backgroundColor: buttonColor }}>
                Positive
              </button>

              <button className="positiveNegativeCustom dissolveEffectCustom" style={{ pointerEvents: "none", backgroundColor: buttonColor }}>
                Negative
              </button>
            </div>


            <div id="customSite-customMessage">
              <p style={{ color: textColor }}>
                {newSite.custom_message
                  ? newSite.custom_message
                  : "Our mission is to protect and promote the health and well-being of all Butte County residents"}
              </p>
            </div>
          </div>
        </div>
        <div id="customSite-rightside">
          <img
            className="miniSiteCoverImg"
            src={newSite.cover_photo}
            alt="People inspecting their test results"
          />
        </div>
      </div>
      <div className="ustomeSiteFooter">
        <CustomeSiteFooter />
      </div>
    </div>

  );
};

export default CustomSite;
