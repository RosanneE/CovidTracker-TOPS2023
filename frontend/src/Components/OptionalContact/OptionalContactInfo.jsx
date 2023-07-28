import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png";
import strength from "../../Images/strength.png";

export default function OptionalQuestions1(props) {
  const [answer, setAnswer] = useState(null);

  const question =
    "Are you willing to share your contact information for public health purposes?<br /><i>Sharing your information makes your response more helpful to public health teams in your community.</i>";
  const options = ["Yes", "No"];

  function handleClick(option) {
    setAnswer(answer === option ? null : option);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(answer);
    // Here you can handle the form submission. For example, you can send the data to a server.
  }

  return (
    <div className="">
      <div className="">
        <div style={{ marginBottom: "0.1rem" }} id="optionalQuestionsBackArrow">
          <img src={backArrow} alt="Back Arrow" />
          <h3 className="optionalH3">Optional Contact Info</h3>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="questionsDiv">
            <p
              className="optionalContactQuestion"
              dangerouslySetInnerHTML={{ __html: question }}
            ></p>
            <ButtonGroup toggle>
              {options.map((option, idx) => (
                <Button
                  className="optionButtons"
                  key={idx}
                  type="radio"
                  variant={answer === option.toLowerCase() ? "primary" : "secondary"}
                  name="question"
                  value={option.toLowerCase()}
                  onClick={() => handleClick(option.toLowerCase())}
                >
                  {option}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </Form>

        <div id="optionalContactImage">
          <img
            style={{ width: "42rem", marginBottom: "6rem" }}
            src={strength}
            alt="Community is Strength sign"
          />
        </div>
      </div>
    </div>
  );
}
