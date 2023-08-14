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

  const carousel = [
    {
      id: 1,
      screenShot: slide_1, //TODO import screenshots
      step: "Step 1: Test result (required)",
      description: `User clicks "positive" or "negative".`,
      examples: [
        `User clicks "positive" signaling that they recently tested positive for COVID.`,
        `User clicks "negative" signaling that they recently tested negative for COVID.`,
      ],
    },
    {
      id: 2,
      screenShot: slide_2, //TODO import screenshots
      step: "Step 2: Test selection (required)",
      description: `User selects brand of test they took.`,
      examples: [
        `If user took a brand of test that’s not one of the six most common ones, they can click “Other” to see the rest of the test brands available in the US.`,
      ],
    },
    {
      id: 3,
      screenShot: slide_3, //TODO import screenshots
      step: "Step 3: Required questions",
      description: `User reports when they took the test, their age, and their home ZIP code. Once they’ve entered that information, they can submit their result.`,
      examples: [
        `User can choose to have the tool remember them on the device they’re using. This will make it faster to report another result in the future.`,
      ],
    },
    {
      id: 4,
      screenShot: slide_4, //TODO import screenshots
      step: "Step 4: Optional questions",
      description: `User can choose to share more information about themselves on this page.`,
      examples: [
        `If user reports a negative result, they are asked if they would like a text message reminder to test again in 48 hours. A valid cell phone number is required for this to work.`,
      ],
    },
    {
      id: 5,
      screenShot: slide_5, //TODO import screenshots
      step: "Step 5: Optional contact info",
      description: `User can choose to share their contact information.`,
      examples: [],
    },
    {
      id: 6,
      screenShot: slide_6, //TODO import screenshots
      step: "Step 6: Negative test result",
      description: `If user reported a negative result, they receive information about why it’s a good idea to test again in 48 hours.`,
      examples: [],
    },
    {
      id: 7,
      screenShot: slide_7, //TODO import screenshots
      step: "Step 6: Positive test result",
      description: `If user reported a positive result, they receive information about CDC guidelines for isolation and masking after testing positive.`,
      examples: [],
    },
    {
      id: 8,
      screenShot: slide_8, //TODO import screenshots
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
      screenShot: slide_9, //TODO import screenshots
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
        <span onClick={props.handleModalClose}>&times;</span>
        <div className="explore-modal">
          <div className="explore-header">
            <h3>Explore the Tool</h3>
            <p>
              Table of Contents
              <span>
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.875 2.08108L8.9375 11L0 2.08108L2.08542 0L8.9375 6.83784L15.7896 0L17.875 2.08108Z"
                    fill="#00426B"
                  />
                </svg>
              </span>
            </p>
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
              <p>{carousel[activeSlideIndex].description}</p>
              <div className="explore-rightSide-lowerBox-examples">
                {carousel[activeSlideIndex].examples.map((example) => {
                  return <p>{example}</p>;
                })}
              </div>
            </div>
          </div>
          <div className="explore-footer">
            <div className="explore-button-container">
              <button className="blueButton" onClick={handleCarouselPrevious}>
                Previous
              </button>
              <button className="blueButton" onClick={handleCarouselNext}>
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