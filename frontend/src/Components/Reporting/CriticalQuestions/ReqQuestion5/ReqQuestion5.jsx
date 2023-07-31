import backArrow from "../../../../Images/Button - Back to Step 2.png"
import "../CriticalQuestions.css"

export default function ReqQuestion5({ demoPage, setDemoPage }) {
 return ( 
    <>
    <div className="questionNumber">
        <img src={backArrow} alt="Back Arrow" onClick={()=>setDemoPage(demoPage -1)}/>
        Required Question 5 of 5
    </div>



    <div className="questionAnswer">
        <p><span className="question">What is your home Zip Code?</span><span className="asterisk">*</span><br/>
        <input className="reqQuestionsInput" type="text" placeholder="e.g., 11111"></input></p>
    </div>

    <div className="nextButtonDiv">
        <button className="nextButton" onClick={()=> setDemoPage(demoPage + 1)}>Next</button>
    </div>
    </>
)}