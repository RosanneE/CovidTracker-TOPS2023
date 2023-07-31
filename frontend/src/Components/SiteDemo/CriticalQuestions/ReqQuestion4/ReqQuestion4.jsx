import backArrow from "../../../../Images/Button - Back to Step 2.png"
import "../CriticalQuestions.css"

export default function ReqQuestion4(props) {
 return ( 
    <>
    <div className="questionAnswer">
        <p><span className="question">How old are you?</span><span className="asterisk">*</span><br/>
        <input className="reqQuestionsInput" type="text" placeholder="e.g., 44"></input></p>
    </div>

    </>
)}