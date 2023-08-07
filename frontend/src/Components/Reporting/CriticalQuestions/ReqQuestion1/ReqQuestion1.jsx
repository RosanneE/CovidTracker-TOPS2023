import backArrow from "../../../../Images/Button - Back to Step 2.png";
import stockImage from "../../../../Images/reportstartphoto.png";
import tissue from "../../../../Images/sick-tissue.png";
import happy from "../../../../Images/happy.png";
import "../CriticalQuestions.css";
import { useState, useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion1({ demoPage, setDemoPage }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { handleUserChange } = useContext(FormContext); // Use useContext here to get the handleUserChange function from the context

  const ReqQuestions = {
    rq1: {
      name: "test_result",
      text: "What was your at-home test result?",
      options: ["Positive", "Negative"],
    },
  };

  function handleChange(questionId, option) {
    setSelectedAnswer(option);
    console.log("Selected Answer:", option); // Log the selected answer to the console

    // Also update the context
    handleUserChange({
      target: { name: ReqQuestions[questionId].name, value: option },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Check if an answer is selected before moving to the next page
    if (selectedAnswer !== null) {
      console.log(selectedAnswer); // Handle the selected answer, e.g., send it to the server.

      // Move to the next page
      setDemoPage(demoPage + 1);
    } else {
      // Display an error or alert to prompt the user to select an answer before proceeding.
    }
  }

  return (
    <>
      <div className="questionNumber">
        <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        Required Question 1 of 5
      </div>

      <div className="questionAnswer">
        <p>
          <span className="question">{ReqQuestions.rq1.text}</span>
          <span className="asterisk">*</span>
          <br />

          <button
            className={`positiveNegative dissolveEffect ${selectedAnswer === "Positive" ? "selected" : ""}`}
            onClick={() => {
              handleChange("rq1", "Positive");
              setDemoPage(demoPage + 1);
            }}
          >
            <img src={tissue} alt="Happy face" style={{ maxWidth: "100%", width: "2rem" }} /> Positive
          </button>

          <button
            className={`positiveNegative dissolveEffect ${selectedAnswer === "Negative" ? "selected" : ""}`}
            onClick={() => {
              handleChange("rq1", "Negative");
              setDemoPage(demoPage + 1);
            }}
          >
            <img src={happy} alt="Happy face" style={{ maxWidth: "100%", width: "2rem" }} /> Negative
          </button>
          <br />

          <img
            src={stockImage}
            alt="Hands on a table"
            style={{ maxWidth: "100%", width: "20rem", marginTop: "2rem" }}
          />
        </p>
      </div>
    </>
  );
}