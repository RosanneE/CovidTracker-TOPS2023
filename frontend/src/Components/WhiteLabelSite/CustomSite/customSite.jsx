import "../CustomSite/CustomSite.css";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
import inspectingResults from "../../../Images/Inspecting_results.png";
import CustomeSiteFooter from "./CustomSiteFooter";

const CustomSite = () => {
  const { newSite } = useContext(FormContext);

  return (
    <div className="miniSite">
      {/* Header - Organization name is custom */}
      <div id="miniSiteHeader">
        <h4>
          {newSite.org_name
            ? newSite.org_name
            : "Butte County Department of Health"}
        </h4>
        <h4>Español +</h4>
      </div>
      <div id="sub-header">
        <h5>Report COVID at-home test results to help your community.</h5>
        <p>
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
              <p> What was your</p>
              <p>at-home test result?</p>
            </span>

            <div className="customSiteButtons">
              <button className="positiveNegativeCustom dissolveEffectCustom" style={{ pointerEvents: "none" }}>
                Positive
              </button>

              <button className="positiveNegativeCustom dissolveEffectCustom" style={{ pointerEvents: "none" }}>
                Negative
              </button>
            </div>


            <div id="customSite-customMessage">
              <p>
                {newSite.custom_message
                  ? newSite.custom_message
                  : "Our mission is to protect and promote the health and well-being of all Butte County residents"}
              </p>
            </div>
          </div>
        </div>
        <div id="customSite-rightside">
          <img
            src={inspectingResults}
            alt="People inspecting their test results"
          />
        </div>
      </div>
      <div className="ustomeSiteFooter" style={{ backgroundColor: '#1f304f' }}>
        <CustomeSiteFooter />
      </div>
    </div>

  );
};

export default CustomSite;
