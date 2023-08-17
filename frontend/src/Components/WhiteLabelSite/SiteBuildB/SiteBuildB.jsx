import { useContext } from "react";
import "./SiteBuildB.css";
import statusBar from "../../../Images/SiteBuildStatusBarB.png";
import { FormContext } from "../../../Context/FormContext";
import LeftArrow from "../../../Images/LeftArrow.png";
import RightArrow from "../../../Images/RightArrow.png";

export default function SiteBuildB({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange } = useContext(FormContext);

  return (
    <>
      <div className="backtoPartnerPageB">
        <p onClick={() => setPageNumber(0)}>
          <img
            style={{ paddingRight: "0.5rem" }}
            src={LeftArrow}
            alt="Left arrow"
          />{" "}
          Back to Partner Page
        </p>
      </div>

      <div className="siteBuildHeaderB">
        <h1>Request a Stand-Alone Site </h1>
        <p className="headerPB">
          After you submit this form our team will reach out to you to start the the process
          and clarify any additional details.
        </p>
        <img
          src={statusBar}
          alt=""
          style={{ maxWidth: "90%" }}
        />
      </div>

      <div className="siteBuildFormB">
        <div className="formHeaderB">
          <h2>COVID-19 Resources</h2>
          <p onClick={() => setPageNumber(2)} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
            Skip this step  {" "} <img
              style={{ paddingRight: "0.5rem" }}
              src={RightArrow}
              alt="Right arrow" />
          </p>
        </div>
        <form action="">
          <div className="siteBuildFormLabelB">
            <label htmlFor="postiveTestLink">Positive-Test Link</label>
            <p className="siteBuildPB">
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
            className="siteBuildFormInputB"
            placeholder="Example: http://mysite.com/positiveinstructions.html"
          />
          <div className="siteBuildFormLabelB">
            <label htmlFor="negativeTestLink">Negative-Test Link</label>
            <p className="siteBuildPB">
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
            className="siteBuildFormInputB"
            placeholder="Example: http://mysite.com/negativeinstructions.html"
          />
          <div className="siteBuildFormLabelB">
            <label htmlFor="furtherInformation">
              Link to Further information about COVID-19
            </label>
            <p className="siteBuildPB">
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
            className="siteBuildFormInputB"
            placeholder="Example: http://mysite.com/covidinfo.html"
          />
          <div className="siteBuildContinueButtonB">
            <p className="siteBuildPB"
              onClick={() => setPageNumber(pageNumber - 1)}
              style={{
                cursor: 'pointer',
                fontSize: '20px',
                color: '#00426b',
                textDecoration: 'underline'
              }}>
              <img
                style={{ paddingRight: "0.5rem" }}
                src={LeftArrow}
                alt="Left arrow"
              />{" "}
              Go back</p>
            <button className="siteBuildBlueButtonB" onClick={() => setPageNumber(4)}>
              Continue &gt;
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
