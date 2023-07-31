import backArrow from "../../../../Images/Button - Back to Step 2.png"
import iHealth from "../../../../Images/ihealth.png"
import abbott from "../../../../Images/abbott.png"
import flowFlex from "../../../../Images/flowflex.png"
import quidel from "../../../../Images/quidel.png"
import clinitest from "../../../../Images/clinitest.png"
import roche from "../../../../Images/roche.png"
import "../CriticalQuestions.css"

export default function ReqQuestion2({ demoPage, setDemoPage }) {
 return ( 
    <>
    <div className="questionNumber">
    <img src={backArrow} alt="Back Arrow"/>
    Required Question 2 of 5
    </div>

    <div className="questionAnswer">
        <p><span className="question">Which test did you take?</span><span className="asterisk">*</span><br/>
        <table className="testTable">
            <tr>
                <td><h3 className="critQuestionsH3">iHealth</h3>
                <p><img src={iHealth} alt="iHealth" style={{maxWidth:"100%", width:"14rem", padding:"1rem"}}/></p>
                </td>
                <td><h3 className="critQuestionsH3">Abbott BinaxNOW</h3>
                <p><img src={abbott} alt="Abbott" style={{maxWidth:"100%", width:"14rem", padding:"1rem"}}/></p>
                </td>
            </tr>
            <tr>
            <td><h3 className="critQuestionsH3">Flowflex</h3>
                <p><img src={flowFlex} alt="Flowflex" style={{maxWidth:"100%", width:"14rem", padding:"1rem"}}/></p>
                </td>
                <td><h3 className="critQuestionsH3">Quidel Quickvue</h3>
                <p><img src={quidel} alt="Quidel" style={{maxWidth:"100%", width:"14rem", padding:"1rem"}}/></p>
                </td>
            </tr>
            <tr>
            <td><h3 className="critQuestionsH3">Siemens CLINITEST</h3>
                <p><img src={clinitest} alt="Siemens Clinitest" style={{maxWidth:"100%", width:"14rem", padding:"1rem"}}/></p>
                </td>
                <td><h3 className="critQuestionsH3">Roche COVID-19 At-Home Test</h3>
                <p><img src={roche} alt="Roche" style={{maxWidth:"100%", width:"14rem", padding:"0rem 1rem 1rem 1rem"}}/></p>
                </td>
            </tr>
        </table>
        <br/>
        <button className="otherButton">Other</button>
        {/* adding temp next page button  */}
        <button onClick={()=>setDemoPage(2)}>Next Page</button>
        </p>
    </div>
    </>
)}