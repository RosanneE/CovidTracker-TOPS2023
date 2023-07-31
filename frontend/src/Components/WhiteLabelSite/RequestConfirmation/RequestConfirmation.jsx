// Request Confirmation Page
import "../RequestConfirmation/RequestConfirmation.css"

const RequestConfirmation = () => {
  return (
    <>
      <div className="requestConfirmationBox">
        <div id="requestTextBox">
          <h2 id="requestH2">Your Request Has Been Submitted.</h2>
          <p id="requestP">
            Thank you for submitting your stand-alone site request. A contact
            from our team will be reaching out via email within 48 hours.
          </p>
        </div>
        <div id="backlinkBox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="13"
            viewBox="0 0 8 13"
            fill="none"
            id="leftAngleArrow"
            aria-label="Back Arrow"
          >
            <path
              d="M6.48649 13L0 6.5L6.48649 0L8 1.51667L3.02703 6.5L8 11.4833L6.48649 13Z"
              fill="#00426B"
            />
          </svg>
          <a href="/PartnerWhiteLabel">Back to Partner Page</a>
        </div>
      </div>
    </>
  );
};

export default RequestConfirmation;
