// Modal Page
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
import "../Modal/Modal.css"
import LeftArrow from "../../../Images/LeftArrow.png";


export default function Modal({ pageNumber, setPageNumber }) {
  const { newSite, handlePartnerChange, handleReviewSubmit } = useContext(FormContext);

  const handleSubmitModal = async (event) => {
    try {
      const response = await handleReviewSubmit(event);
      console.log("Review Response: ", response);
      if (response) {
        setPageNumber(1);
      } else {
        console.error("Form Submission Failed")
      }
    } catch (error) {
      console.error("Form Submission Failed:", error)
    }
  }





  return (
    <>
      <div className="backtoPartnerPageC">
        <p onClick={() => setPageNumber(1)}>
          <img
            style={{ paddingRight: "0.5rem" }}
            src={LeftArrow}
            alt="Left arrow"
          />{" "}
          Back to Partner Page
        </p>
      </div>

      <div className="requestConfirmationBox">
        <div className="requestTextBox">
          <h2 className="requestH2">The modal is currently in development</h2>
          <p className="requestP">
            Thank you for your interest in the modal version of the Make My Test Count site. 
            Join our emailing list and we will notify you as soon as the modal option is available.
          </p>
        
          <div className="siteBuildFormLabelA">
            <label htmlFor="email" id="email_label" style={{marginTop: '50px'}}>
              Email
            </label>
          </div>
          <input
            type="text"
            id="email"
            name="email"
            value={newSite.email}
            onChange={handlePartnerChange}
            className="modalInput"
            placeholder="Example: health@abccounty.com"
          />

          <div className="buttonsDesignDesign">
            <button className="siteBuildBlueButtonDesign" onClick={handleSubmitModal}> Submit</button>
            <button className="siteBuildBlueButtonDesign" onClick={() => setPageNumber(2)}> Stand-Alone Site</button>
          </div>



        </div>
      </div>
    </>
  );
};



