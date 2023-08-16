import { useState } from "react";
import "./ExploreDemo.css";
import slide_1 from "../../../Images/modal_slide_1.png";
import slide_2 from "../../../Images/modal_slide_2.png";
import slide_3 from "../../../Images/modal_slide_3.png";
import slide_4 from "../../../Images/modal_slide_4.png";
import slide_5 from "../../../Images/modal_slide_5.png";
import slide_6 from "../../../Images/modal_slide_6.png";
import slide_7 from "../../../Images/modal_slide_7.png";
import slide_8 from "../../../Images/modal_slide_8.png";
import slide_9 from "../../../Images/modal_slide_9.png";

const ExploreDemo = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleCarouselNext = () => {
    if (activeSlideIndex < carousel.length - 1)
      setActiveSlideIndex(activeSlideIndex + 1);
  };
  const handleCarouselPrevious = () => {
    if (activeSlideIndex !== 0) setActiveSlideIndex(activeSlideIndex - 1);
  };

  const handleDropdownClick = (index) => {
    const detailsElement = document.getElementById("tableOfContents");
    const isOpen = detailsElement.open;
    // toggle the open attribute to close or open
    isOpen ? (detailsElement.open = false) : (detailsElement.open = true);

    setActiveSlideIndex(index);
  };

  const tableOfContents = [
    "Step 1: Test result",
    "Step 2: Test selection",
    "Step 3: Required question",
    "Step 4: Optional questions",
    "Step 5: Optional contact info",
    "Step 6: Negative test result",
    "Step 6: Positive test result",
    "Stand-alone site example",
    "Modal pop-up example",
  ];

  const carousel = [
    {
      id: 1,
      screenShot: slide_1,
      step: "Step 1: Test result (required)",
      description: `User clicks "positive" or "negative".`,
      examples: [
        `User clicks "positive" signaling that they recently tested positive for COVID.`,
        `User clicks "negative" signaling that they recently tested negative for COVID.`,
      ],
    },
    {
      id: 2,
      screenShot: slide_2,
      step: "Step 2: Test selection (required)",
      description: `User selects brand of test they took.`,
      examples: [
        `If user took a brand of test that’s not one of the six most common ones, they can click “Other” to see the rest of the test brands available in the US.`,
      ],
    },
    {
      id: 3,
      screenShot: slide_3,
      step: "Step 3: Required questions",
      description: `User reports when they took the test, their age, and their home ZIP code. Once they’ve entered that information, they can submit their result.`,
      examples: [
        `User can choose to have the tool remember them on the device they’re using. This will make it faster to report another result in the future.`,
      ],
    },
    {
      id: 4,
      screenShot: slide_4,
      step: "Step 4: Optional questions",
      description: `User can choose to share more information about themselves on this page.`,
      examples: [
        `If user reports a negative result, they are asked if they would like a text message reminder to test again in 48 hours. A valid cell phone number is required for this to work.`,
      ],
    },
    {
      id: 5,
      screenShot: slide_5,
      step: "Step 5: Optional contact info",
      description: `User can choose to share their contact information.`,
      examples: [],
    },
    {
      id: 6,
      screenShot: slide_6,
      step: "Step 6: Negative test result",
      description: `If user reported a negative result, they receive information about why it’s a good idea to test again in 48 hours.`,
      examples: [],
    },
    {
      id: 7,
      screenShot: slide_7,
      step: "Step 6: Positive test result",
      description: `If user reported a positive result, they receive information about CDC guidelines for isolation and masking after testing positive.`,
      examples: [],
    },
    {
      id: 8,
      screenShot: slide_8, 
      step: "Stand-alone site example",
      description: `On a stand-alone site, your organization's logo and imagery would appear in place of the MakeMyTestCount branding.`,
      examples: [
        `Placement for your organization's logo.`,
        `If you wish, you can customize the guidance that a user receives after submitting a negative or positive test.`,
        `Optionally, you can customize your whitelabeled site’s theme colors and imagery to better match your organization’s branding.`,
      ],
    },
    {
      id: 9,
      screenShot: slide_9,
      step: "Modal pop-up example",
      description: `When you embed a JavaScript plug-in, the tool appears as a pop-up modal.`,
      examples: [
        `Placement for your organization's logo.`,
        `Custom social sharing message lorem ipsum lorem ipsum`,
        `Optionally, you can customize your whitelabeled modal’s theme colors and imagery to better match your organization’s branding.`,
      ],
    },
  ];

  return (
    <div className="explore-modal-overlay">
      <div className="explore-modal-container">
        <span onClick={props.handleModalClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M23.8149 22.9213C23.9334 23.0398 24 23.2005 24 23.3681C24 23.5357 23.9334 23.6964 23.8149 23.8149C23.6964 23.9334 23.5357 24 23.3681 24C23.2005 24 23.0398 23.9334 22.9213 23.8149L12 12.8937L1.07874 23.8149C0.960234 23.9334 0.799505 24 0.631912 24C0.464318 24 0.303589 23.9334 0.185083 23.8149C0.0665765 23.6964 3.30366e-09 23.5357 0 23.3681C-3.30367e-09 23.2005 0.0665759 23.0398 0.185082 22.9213L11.1063 12L0.185082 1.07874C0.0665759 0.960234 0 0.799505 0 0.631912C0 0.464318 0.0665759 0.303589 0.185082 0.185082C0.303589 0.0665759 0.464318 0 0.631912 0C0.799505 0 0.960234 0.0665759 1.07874 0.185082L12 11.1063L22.9213 0.185082C22.9799 0.126404 23.0496 0.0798577 23.1263 0.0481011C23.2029 0.0163446 23.2851 1.63581e-09 23.3681 0C23.4511 -1.63581e-09 23.5332 0.0163446 23.6099 0.0481011C23.6866 0.0798576 23.7562 0.126404 23.8149 0.185082C23.8736 0.243761 23.9201 0.313422 23.9519 0.390089C23.9837 0.466756 24 0.548928 24 0.631912C24 0.714895 23.9837 0.797067 23.9519 0.873734C23.9201 0.950401 23.8736 1.02006 23.8149 1.07874L12.8937 12L23.8149 22.9213Z"
              fill="#00426B"
            />
          </svg>
        </span>
        <div className="explore-modal">
          <div className="explore-header">
            <h3>Explore the Tool</h3>            
            <details id="tableOfContents">
              <summary>Table of Contents</summary>
              <ul>
                {tableOfContents.map((step, index) => {
                  return (
                    <li onClick={() => handleDropdownClick(index)}>{step}</li>
                  );
                })}
              </ul>
            </details>
          </div>
          <div className="explore-body">
            <div className="explore-leftSide">
              <img
                src={carousel[activeSlideIndex].screenShot}
                alt={`img of ${carousel[activeSlideIndex].step}`}
              />
            </div>
            <div className="explore-rightSide-topBox">
              <h4>{carousel[activeSlideIndex].step}</h4>
            </div>
            <div className="explore-rightSide-lowerBox">
              <p id="explore-description">
                {carousel[activeSlideIndex].description}
              </p>
              <div className="explore-rightSide-lowerBox-examples">
                <ol className="explore-examples-list">
                  {carousel[activeSlideIndex].examples.map((example, index) => {
                    return (
                      <li className="explore-example">
                        <span className="explore-examples-bulletPoints">
                          {String.fromCharCode(index + 65)}
                        </span>
                        <p>{example}</p>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
          <div className="explore-footer">
            <div className="explore-button-container">
              {activeSlideIndex !== 0 ? (
                <button
                  className="blueButton"
                  id="explore-button-previous"
                  onClick={handleCarouselPrevious}
                >
                  Previous
                </button>
              ) : (
                ""
              )}
              <button
                className="blueButton"
                onClick={handleCarouselNext}
                style={{
                  backgroundColor:
                    activeSlideIndex === carousel.length - 1
                      ? "#0058B780"
                      : undefined,
                  border:
                    activeSlideIndex === carousel.length - 1
                      ? "#0058B780 solid 4px"
                      : undefined,
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDemo;
