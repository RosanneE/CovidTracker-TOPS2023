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
        <img src={statusBar} alt="" style={{ maxWidth: "90%" }} />
      </div>


      <div className="reviewAndSubmitTable">
        <table className="reviewAndSubmit">
          <tbody className="reviewAndSubmitTBody">
            <tr>
              <td>
                <div>
                  <div className="reviewAndSubmitDiv">
                    <h3>Review & Submit</h3>
                    <p>Please review your contact information</p>
                    <div style={{ textAlign: "right" }}>

                      <p onClick={() => setPageNumber(2)}>Edit info</p>

                    </div>

                    <div>
                      <label>Contact Name</label>
                      <input
                        className="reviewAndSubmitInput"
                        type="text"
                        name="contact_name"
                        value={newSite.contact_name}
                        onChange={handlePartnerChange}
                      />
                    </div>
                    <div>
                      <label>Organization Name</label>
                      <input
                        className="reviewAndSubmitInput"
                        type="text"
                        name="org_name"
                        value={newSite.org_name}
                        onChange={handlePartnerChange}
                      />
                    </div>
                    <div>
                      <label>Email</label>
                      <input
                        className="reviewAndSubmitInput"
                        type="email"
                        name="email"
                        value={newSite.email}
                        onChange={handlePartnerChange}
                      />
                    </div>
                    <div>
                      <label>Home Link</label>
                      <input
                        className="reviewAndSubmitInput"
                        type="text"
                        name="home_link"
                        value={newSite.home_link}
                        onChange={handlePartnerChange}
                      />
                    </div>
                  </div>
                  <div className="goBackSubmit">
                    <div className="goBack">
                      <p onClick={() => setPageNumber(pageNumber - 1)} style={{cursor: 'pointer', fontSize: '20px', color: '#00426b', textDecoration: 'underline'}}>
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
              </td>
              <td>

                <CustomSite />

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReviewAndSubmit;
