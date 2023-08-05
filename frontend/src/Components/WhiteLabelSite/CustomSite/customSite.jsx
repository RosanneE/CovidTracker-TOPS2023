import "../CustomSite/CustomSite.css";
import Footer from "../../Footer/Footer";
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
import tissue from "../../../Images/sick-tissue.png";
import happy from "../../../Images/happy.png";
import inspectingResults from "../../../Images/Inspecting_results.png";

const CustomSite = () => {
  const { newSite } = useContext(FormContext);

  return (
    <>
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
          <div className="questionAnswer">
            <p>
              <span className="question">
                What was your at-home test result?
              </span>
              <span className="asterisk">*</span>
              <br />
              <button className="positiveNegative dissolveEffect" style={{ pointerEvents: "none"}}>
                <img
                  src={tissue}
                  alt="Happy face"
                  style={{ maxWidth: "100%", width: "2rem" }}
                />{" "}
                Positive
              </button>

              <button className="positiveNegative dissolveEffect" style={{ pointerEvents: "none"}}>
                <img
                  src={happy}
                  alt="Happy face"
                  style={{ maxWidth: "100%", width: "2rem" }}
                />{" "}
                Negative
              </button>
              <br />
            </p>{" "}
          </div>
          <div id="customSite-customMessage">
            <p>
              {newSite.custom_message
                ? newSite.custom_message
                : "Our mission is to protect and promote the health and well-being of all Butte County residents"}
            </p>
          </div>
        </div>
        <div id="customSite-rightside">
          <img
            src={inspectingResults}
            alt="People inspecting their test results"
          />
        </div>
      </div>
      <div id="sub-footer">
        <p>
          This site meets strict US government security standards to keep your
          data secure.
        </p>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default CustomSite;
