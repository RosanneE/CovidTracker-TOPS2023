import backArrow from "../../../../Images/Button - Back to Step 2.png";
import stockImage from "../../../../Images/Inspecting_results.png";
import "../CriticalQuestions.css";
import { useState, useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";

export default function ReqQuestion1({ demoPage, setDemoPage }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const { newUser, handleUserChange } = useContext(FormContext); // Use useContext here to get the newUser state

  const ReqQuestions = {
    rq1: {
      name: "test_result",
      text: "What was your at-home test result?",
      options: ["Positive", "Negative"],
    },
  };

  function handleChange(questionId, option) {
    setSelectedAnswer(option);
    console.log("Selected Answer:", option);

    // Convert the option to a boolean value
    const booleanValue = option === "Positive" ? true : false;

    // Update the context with the boolean value
    handleUserChange({
      target: { name: ReqQuestions[questionId].name, value: booleanValue },
    });
  }

  return (
    <>
        <div className="reportHeader displayNone">Report COVID-19 at-home test results to help your community</div>
        <div className="questionNumber displayNoneDesktop">
        <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
        1 of 5
      </div>

      <div className="questionAnswer">
        <div className="questionDiv">
          <span className="question">{ReqQuestions.rq1.text}</span>
          <span className="asterisk"> *</span>
          <br />

          <button
            className={`positiveNegative dissolveEffect ${
              selectedAnswer === "Positive" ? "selected" : ""
            }`}
            onClick={() => {
              handleChange("rq1", "Positive");
              setDemoPage(demoPage + 1);
            }}
          >
            Positive
          </button>

          <button
            className={`positiveNegative dissolveEffect ${
              selectedAnswer === "Negative" ? "selected" : ""
            }`}
            onClick={() => {
              handleChange("rq1", "Negative");
              setDemoPage(demoPage + 1);
            }}
          >
            Negative
          </button>
          </div>
          <div className="questionImage displayNone">
          <img
            src={stockImage}
            alt="Hands on a table"
            style={{ maxWidth: "100%", width: "32.5rem", marginTop: "2rem" }}
          />
          </div>
      </div>
      <div className="requiredQuestion1 displayNone">
        <span className="requiredQuestionAsterisk1">* </span>
        <span className="requiredQuestionText1">Required question</span>
      </div>
    </>
  );
}