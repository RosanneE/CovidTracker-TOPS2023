import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import backArrow from "../../../../Images/Button - Back to Step 2.png";
import "../../OptionalQuestions/OptionalQuestions.css";

export default function OptionalQuestions({ demoPage, setDemoPage }) {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: "q1", text: "Have you had any symptoms?", options: ["No", "Yes", "Not sure"] },
    {
      id: "q2",
      text: "What was your sex assigned at birth?",
      options: ["Male", "Female", "Other"],
    },
    {
      id: "q3",
      text: "What is your race?",
      options: [
        "American Indian or Alaska Native ",
        "Asian",
        "Black or African American",
        "Native Hawaiian or Other Pacific Islander",
        "White",
        "Other",
      ],
    },
    {
      id: "q4",
      text: "What is your ethnicity?",
      options: ["Hispanic or Latino", "Not Hispanic or Latino"],
    },
    {
      id: "q5",
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
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(answers);
    // Here you can handle the form submission. For example, you can send the data to a server.
  }

  return (
    <div className="">
      <div id="optionalQuestionsBackArrow">
        <img src={backArrow} alt="Back Arrow" onClick={() => setDemoPage(demoPage - 1)} />
      </div>
      <h3 className="optionalH3">Optional Questions</h3>

      <Form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div className="questionsDiv" key={question.id}>
            <p className="optionalQuestions">{question.text}</p>
            <ButtonGroup toggle className={question.id === "q3" ? "two-columns" : ""}>
              {question.options.map((option, idx) => (
                <Button
                  className="optionalQuestionsButtons"
                  key={idx}
                  type="radio"
                  variant={
                    answers[question.id] === option.toLowerCase() ? "primary" : "secondary"
                  }
                  name={question.id}
                  value={option.toLowerCase()}
                  onClick={() => handleChange(question.id, option.toLowerCase())}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        ))}
      </Form>
      <div className="nextButtonDiv">
        <Button
          id="optionalQuestionsNextButton"
          style={{ marginTop: "2.5rem" }}
          type="Next"
          onClick={() => setDemoPage(demoPage + 1)}
        >
          Next
        </Button>
      </div>
      <div
        style={{ display: "block", marginBottom: "1.5rem" }}
        onClick={() => setDemoPage(demoPage + 1)}
      >
        <a href="your-link-here" target="_blank" rel="noopener noreferrer">
          Skip & Submit
        </a>
      </div>
    </div>
  );
}
