import backArrow from "../../../../Images/Button - Back to Step 2.png"
import ReqQuestionCalendar from "../ReqQuestion5/ReqQuestionCalendar"
import "../CriticalQuestions.css"

export default function ReqQuestion3({ demoPage, setDemoPage }) {
 return ( 
    <>
    
    <img src={backArrow} alt="Back Arrow"/>
 

    <div className="questionAnswer">
        <p><span className="question">When did you test?</span><span className="asterisk">*</span><br/>
        <button className="selectButtonLeft">Today</button><button className="selectButtonMiddle">Yesterday</button><button className="selectButtonRight">Other</button></p>
    </div>

    <div className="calendar">
    <ReqQuestionCalendar />
    </div>
    </>
)}