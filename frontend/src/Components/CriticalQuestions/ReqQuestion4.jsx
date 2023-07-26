import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png"
import "./CriticalQuestions.css"

export default function ReqQuestion4(props) {
 return ( 
    <>
    <div className="questionNumber">
    <img src={backArrow} alt="Back Arrow"/>
    Required Question 4 of 5
    </div>

    <div className="questionAnswer">
        <p><span className="question">How old are you?</span><span className="asterisk">*</span><br/>
        <input type="text" placeholder="e.g., 44"></input></p>
    </div>

    <div className="nextButtonDiv">
        <button className="nextButton">Next</button>
    </div>
    </>
)}