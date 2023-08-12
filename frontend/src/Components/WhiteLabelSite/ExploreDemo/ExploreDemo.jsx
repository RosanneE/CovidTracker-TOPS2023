import { useState } from "react";
import "./ExploreDemo.css";

const ExploreDemo = (props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleCarouselChange = (index) => {
    setActiveSlideIndex(index);
  };

  return (
    <div className="explore-modal-overlay">
      <div className="explore-modal-container">
        <span onClick={props.handleModalClose}>&times;</span>
        <div className="explore-modal">
          <div className="explore-header">
            <h3>Explore the Tool</h3>
            <p>Table of Contents (needs down arrow)</p>
          </div>
          <div className="explore-body">
            <div className="explore-leftSide">ScreenShot Here</div>
            <div className="explore-rightSide">
              Text here should be variable based, moves with the carosel
            </div>
          </div>
          <div className="explore-footer">
            <div className="explore-button-container">
              <button className="blueButton" id="explore-previousButton">
                Previous
              </button>
              <button className="blueButton">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDemo;
