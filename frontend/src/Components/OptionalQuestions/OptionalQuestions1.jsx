import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';

export default function OptionalQuestions1(props) {
    const [answers, setAnswers] = useState({});

    const questions = [
        { id: 'q1', text: 'Have you had any symptoms?', options: ['No', 'Yes', 'Not sure'] },
        { id: 'q2', text: 'What was your sex assigned at birth?', options: ['Male', 'Female', 'Other'] },
        // Add more questions here
    ];

    function handleChange(questionId, option) {
        setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: option }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(answers);
        // Here you can handle the form submission. For example, you can send the data to a server.
    }

    return (
        <div className="optional-questions1">
            <h3>Optional Questions</h3>
            <Form onSubmit={handleSubmit}>
                {questions.map(question => (
                    <div key={question.id}>
                        <p>{question.text}</p>
                        <ButtonGroup toggle>
                            {question.options.map((option, idx) => (
                                <Button 
                                    key={idx}
                                    type="radio"
                                    variant={answers[question.id] === option.toLowerCase() ? "primary" : "secondary"}
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
