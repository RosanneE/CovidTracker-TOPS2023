import React, { useContext } from "react";
import "./SiteBuildB.css";
import statusBar from "../../../Images/SiteBuildStatusBarB.png";
import { FormContext } from "../../../Context/FormContext";

export default function SiteBuildB({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  return (
    <>
      <div className="backtoPartnerPage">
        {/* don't forget to update this link before production */}
        <p onClick={()=> setPageNumber(0)}>{"\u003C"} Back to Partner Page </p>
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

      <div className="siteBuildForm">
        <div className="formHeaderB">
          <h2>COVID-19 Resources</h2>
          <p onClick={() => setPageNumber(2)}>Skip this step {"\u003E"}</p>
        </div>
        <form action="">
          <div className="siteBuildFormLabel">
            <label htmlFor="postiveTestLink">Positive-Test Link</label>
            <p className="siteBuildP">
              If the user has tested positive, where can they find additional instructions? (if
              the field is left blank, users will be direct to the instructions page on
              MakeMyTestCount.org for users reporting postive results)
            </p>
          </div>
          <input
            type="text"
            id="postiveTestLink"
            name="positive_test_link"
            value={newSite.positiveTest}
            onChange={handlePartnerChange}
            className="siteBuildFormInput"
          />
          <div className="siteBuildFormLabel">
            <label htmlFor="negativeTestLink">Negative-Test Link</label>
            <p className="siteBuildP">
              If the user has tested negative, where can they find additional instructions? (if
              this field is left blank, users will be directed to the instructions page on
              MakeMyTestCount.org for users reporting negative results.)
            </p>
          </div>
          <input
            type="text"
            id="negativeTestLink"
            name="negative_test_link"
            value={newSite.negative_test_link}
            onChange={handlePartnerChange}
            className="siteBuildFormInput"
          />
          <div className="siteBuildFormLabel">
            <label htmlFor="furtherInformation">
              Link to Further information about COVID-19
            </label>
            <p className="siteBuildP">
              Where can the user find additional information? (if this field is left blank,
              users will be directed to WhenToTest.org for further infomration about COVID-19.)
            </p>
          </div>
          <input
            type="text"
            id="furtherInformation"
            name="more_info_link"
            value={newSite.more_info_link}
            onChange={handlePartnerChange}
            className="siteBuildFormInput"
          />
          <div className="siteBuildContinueButtonB">
            <p onClick={() => setPageNumber(pageNumber - 1)}>{"\u003C"} Go back</p>
            <button className="siteBuildBlueButton" onClick={() => setPageNumber(4)}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
