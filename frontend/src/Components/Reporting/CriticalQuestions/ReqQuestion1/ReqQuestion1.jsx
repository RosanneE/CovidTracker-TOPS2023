import backArrow from "../../../../Images/Button - Back to Step 2.png"
import stockImage from "../../../../Images/reportstartphoto.png"
import tissue from "../../../../Images/sick-tissue.png"
import happy from "../../../../Images/happy.png"
import "../CriticalQuestions.css"
import { useState } from "react"

export default function ReqQuestion1({ demoPage, setDemoPage }) {


 return ( 
    <>
    <div className="questionNumber">
    <img src={backArrow} alt="Back Arrow" onClick={()=>setDemoPage(demoPage -1)}/>
    Required Question 1 of 5
    </div>

    <div className="questionAnswer">
        <p><span className="question">What was your at-home 
test result?</span><span className="asterisk">*</span><br/>

{/* ------------------ Need to create a useState for postive or negative  ---------------------*/}

<button className="positiveNegative dissolveEffect" onClick={()=>setDemoPage(2)}>
    <img src={tissue} alt="Happy face" style={{maxWidth:"100%", width:"2rem"}}/> Positive
</button> 

<button className="positiveNegative dissolveEffect" onClick={()=>setDemoPage(2)}>
    <img src={happy} alt="Happy face" style={{maxWidth:"100%", width:"2rem"}}/> Negative
</button><br/>

<img src={stockImage} alt="Hands on a table" style={{maxWidth:"100%", width:"20rem", marginTop:"2rem"}}/>

</p>

    </div>

    </>
)}