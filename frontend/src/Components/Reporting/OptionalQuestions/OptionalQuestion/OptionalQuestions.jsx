import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalQuestions/OptionalQuestions.css";
import { FormContext } from "../../../../Context/FormContext";
import information from "../../../../Images/informationicon.png";

export default function OptionalQuestions({ demoPage, setDemoPage }) {
  const [answers, setAnswers] = useState({});
  const { newUser, handleUserChange, handleUserSubmit } = useContext(FormContext);

  const handleSkipAndSubmit = (event) => {
    handleUserSubmit(event);
    setDemoPage(10); // Redirects to the desired page
  };

  const questions = [
    {
      id: "q1",
      name: "symptoms",
      text: "Have you had any symptoms?",
      options: ["No", "Yes", "Not sure"],
    },
    {
      id: "q2",
      name: "sex",
      text: "What was your sex assigned at birth?",
      options: ["Male", "Female", "Other"],
    },
    {
      id: "q3",
      name: "race",
      text: "What is your race?",
      options: [
        "American Indian or Alaskan Native",
        "Asian",
        "Black or African American",
        "Native Hawaiian or other Pacific Islander",
        "White",
        "Other",
      ],
    },
    {
      id: "q4",
      name: "ethnicity",
      text: "What is your ethnicity?",
      options: ["Hispanic or Latino", "Non-Hispanic or Latino"],
    },
    {
      id: "q5",
      name: "reminder",
      text: "Would you like text/SMS reminder to test again in 48 hours?",
      options: ["Yes", "No"],
    },
  ];

  function handleChange(questionId, option) {
    setAnswers((prevAnswers) => {
      // If the new answer is the same as the old one, 'unselect' the answer
      if (prevAnswers[questionId] === option) {
        return { ...prevAnswers, [questionId]: null };
      }

      // Otherwise, update the answer normally
      return { ...prevAnswers, [questionId]: option };
    });

    // Update the context
    handleUserChange({
      target: { name: questions.find((q) => q.id === questionId).name, value: option },
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(answers);
    // Here you can handle the form submission. For example, you can send the data to a server.
  }

  return (
    <div>
      <div className="optionalArrow">
    <img className="backArrowImg" src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
  </div>
  <div className="opQuestionsDiv">
      <h3 className="question2">Optional Questions</h3><br/><br/>
      <Form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id}>
            <p className="optionalQuestions">{question.text}</p>
            <ButtonGroup toggle className={question.id === "q3" ? "two-columns" : ""}>
              {question.options.map((option, idx) => (
                <Button
                  className="optionalQuestionsButtons"
                  key={idx}
                  type="radio"
                  variant={answers[question.id] === option ? "primary" : "secondary"}
                  name={question.name}
                  value={newUser[question.name]}
                  onClick={() => handleChange(question.id, option)}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        ))}
      </Form><br/><br/>
      <div className="displayNoneDesktop displayMobile">
      <input className="checkbox" type="checkbox" id="Checkbox" name="checkbox" value="1" />
      Remember me on this device. 
      <img
      style={{paddingLeft: "0.5rem"}}
        src={information}
        alt="Information icon"
      /><br/><br/>
      </div>
      <div className="nextButtonDiv">
        <Button
          id="optionalQuestionsNextButton"
          style={{ border: "3px solid #8A8A8A" }}
          type="Next"
          onClick={() => setDemoPage(demoPage + 1)}
        >
          Next
        </Button>
      </div>
      <div className="skipSubmit" style={{ display: "block", marginBottom: "13rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline", color: "#0058B7", fontWeight: "500"}}
          onClick={handleSkipAndSubmit}
        >
          Skip & Submit
        </span>
        </div>
      </div>
      </div>
  );
}
