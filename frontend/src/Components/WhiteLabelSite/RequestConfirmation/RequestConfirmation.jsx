// Request Confirmation Page
import "../RequestConfirmation/RequestConfirmation.css"
import LeftArrow from "../../../Images/LeftArrow.png";

const RequestConfirmation = ({ pageNumber, setPageNumber }) => {
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

      <div className="requestConfirmationBox">
        <div id="requestTextBox">
          <h2 id="requestH2">Your Request Has Been Submitted.</h2>
          <p id="requestP">
            Thank you for submitting your stand-alone site request. A contact
            from our team will be reaching out via email within 48 hours.
          </p>
        </div>
      </div>
    </>
  );
};

export default RequestConfirmation;
