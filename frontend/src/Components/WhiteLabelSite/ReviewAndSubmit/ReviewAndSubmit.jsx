import { useContext } from "react";
import LeftArrow from "../../../Images/LeftArrow.png";
import "../ReviewAndSubmit/ReviewAndSubmit.css";
import { FormContext } from "../../../Context/FormContext";
import CustomSite from "../CustomSite/CustomSite";
import statusBar from "../../../Images/SiteBuildStatusBarD.png";

function ReviewAndSubmit({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange, handleReviewSubmit } = useContext(
    FormContext
  );

  const handleSubmit = async (event) => {
    try {
      const response = await handleReviewSubmit(event);
      console.log("Review Response: ", response);
      if (response) {
        setPageNumber(6);
      } else {
        console.error("Form Submission Failed")
      }
    } catch (error) {
      console.error("Form Submission Failed:", error)
    }
  }

  return (
    <div>
      <div className="siteBuildHeaderC" style={{ marginTop: "50px" }}>
        <h1>Request a Stand-Alone Site </h1>
        <p className="siteBuildHeaderPC">
          After you submit this form our team will reach out to you to start the the process
          and clarify any additional details.
        </p>
        <img src={statusBar} alt="Status Bar: Submit" style={{ maxWidth: "90%" }} />
      </div>

      <div className="reviewAndSubmit">
        <div className="reviewAndSubmitGrid">
          <div className="reviewLeftGrid">

            <div className="reviewFormHeader">
              <h3>Review & Submit</h3>
              <p>Please review your contact information</p>
              <div className="reviewEdit">
                <p onClick={() => setPageNumber(2)}>Edit info</p>
              </div>

            </div>

            <div className="reviewForm">
              <label htmlFor="reviewContactName">Contact Name</label>
              <input
                className="reviewAndSubmitInput"
                id="reviewContactName"
                type="text"
                name="contact_name"
                value={newSite.contact_name}
                onChange={handlePartnerChange}
              />


              <label htmlFor="reviewOrganizationName">Organization Name</label>
              <input
                className="reviewAndSubmitInput"
                id="reviewOrganizationName"
                type="text"
                name="org_name"
                value={newSite.org_name}
                onChange={handlePartnerChange}
              />


              <label htmlFor="reviewEmail">Email</label>
              <input
                className="reviewAndSubmitInput"
                id="reviewEmail"
                type="email"
                name="email"
                value={newSite.email}
                onChange={handlePartnerChange}
              />


              <label  htmlFor="reviewHomeLink">Home Link</label>
              <input
                className="reviewAndSubmitInput"
                id="reviewHomeLink"
                type="text"
                name="home_link"
                value={newSite.home_link}
                onChange={handlePartnerChange}
              />


            </div>


            <div className="goBackSubmit">
              <div className="goBack">
                <p onClick={() => setPageNumber(pageNumber - 1)} style={{ cursor: 'pointer', fontSize: '20px', color: '#00426b', textDecoration: 'underline' }}>
                  <img
                    style={{ paddingRight: "0.5rem" }}
                    src={LeftArrow}
                    alt="Left arrow"
                  />{" "}
                  Go Back
                </p>
              </div>
              <button
                className="siteBuildBlueButtonReview  dissolveEffect"
                onClick={handleSubmit}
              >
                Submit request
              </button>
            </div>
          </div>

          <div className="reviewCustomSite">
            <div className="reviewCustomSiteFlex">
              <CustomSite />

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ReviewAndSubmit;
