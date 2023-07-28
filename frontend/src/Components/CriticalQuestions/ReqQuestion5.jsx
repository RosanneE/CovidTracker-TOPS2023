import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png"
import "./CriticalQuestions.css"

export default function ReqQuestion5(props) {
 return ( 
    <>
    <div className="questionNumber">
    <img src={backArrow} alt="Back Arrow"/>
    Required Question 5 of 5
    </div>

    <div className="questionAnswer">
        <p><span className="question">What is your home Zip Code?</span><span className="asterisk">*</span><br/>
        <input className="reqQuestionsInput" type="text" placeholder="e.g., 11111"></input></p>
    </div>

    <div className="nextButtonDiv">
        <button className="nextButton">Next</button>
    </div>
    </>
)}