import ReqQuestion1 from "../../Components/CriticalQuestions/ReqQuestion1"
import ReqQuestion2 from "../../Components/CriticalQuestions/ReqQuestion2"
import ReqQuestion3 from "../../Components/CriticalQuestions/ReqQuestion3"
import ReqQuestion4 from "../../Components/CriticalQuestions/ReqQuestion4"
import ReqQuestion5 from "../../Components/CriticalQuestions/ReqQuestion5"

export default function CriticalQuestions(props) {
    return (
        <>        
        <div className="reqQuestion1">
        <ReqQuestion1/>
        </div>

        <div className="reqQuestion2">
        <ReqQuestion2/>
        </div>

        <div className="reqQuestion3">
        <ReqQuestion3/>
        </div>

        <div className="reqQuestion4">
        <ReqQuestion4/>
        </div>

        <div className="reqQuestion5">
        <ReqQuestion5/>
        </div>
        </>
    )}