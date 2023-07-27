import backArrow from "../../Images/Button - Back to Step 2 ⏵ Img.png"
import ReqQuestionCalendar from "./ReqQuestionCalendar"
import "./CriticalQuestions.css"

export default function ReqQuestion3(props) {
 return ( 
    <>
    <div className="questionNumber">
    <img src={backArrow} alt="Back Arrow"/>
    Required Question 3 of 5
    </div>

    <div className="questionAnswer">
        <p><span className="question">When did you test?</span><span className="asterisk">*</span><br/>
        <button className="selectButtonLeft">Today</button><button className="selectButtonMiddle">Yesterday</button><button className="selectButtonRight">Other</button></p>
    </div>

    <div className="nextButtonDiv">
        <button className="nextButton">Next</button>
    </div>

    <div className="calendar">
    <ReqQuestionCalendar />
    </div>
    </>
)}