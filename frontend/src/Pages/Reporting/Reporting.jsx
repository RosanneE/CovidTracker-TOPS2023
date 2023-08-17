import { useState, useEffect } from "react";
import ReqQuestion1 from "../../Components/Reporting/CriticalQuestions/ReqQuestion1/ReqQuestion1";
import ReqQuestion2 from "../../Components/Reporting/CriticalQuestions/ReqQuestion2/ReqQuestion2";
import ReqQuestion3 from "../../Components/Reporting/CriticalQuestions/ReqQuestion3/ReqQuestion3";
import ReqQuestion4 from "../../Components/Reporting/CriticalQuestions/ReqQuestion4/ReqQuestion4";
import ReqQuestion5 from "../../Components/Reporting/CriticalQuestions/ReqQuestion5/ReqQuestion5";
import OptionalQuestions from "../../Components/Reporting/OptionalQuestions/OptionalQuestion/OptionalQuestions";
import OptionalQuestionsInfo from "../../Components/Reporting/OptionalQuestions/OptionalQuestionInfo/OptionalQuestionsInfo";
import FinalSubmission from "../../Components/Reporting/FinalSubmission/FinalSubmission";
import OptionalContactInfo from "../../Components/Reporting/OptionalContact/OptionalContactInfo/OptionalContactInfo";
import YesContactInfo from "../../Components/Reporting/OptionalContact/YesContactInfo/YesContactInfo";
import Home from "../../Components/Reporting/LandingPage/Home";

export default function Reporting() {
  const [demoPage, setDemoPage] = useState(0);

  useEffect(() => {
    const savedDemoPage = localStorage.getItem("demoPage");
    if (savedDemoPage !== null) {
      setDemoPage(parseInt(savedDemoPage, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("demoPage", demoPage.toString());
    const targetY = window.innerHeight * 0.2;
    window.scrollTo(0, targetY);
  }, [demoPage]);



  return (
    <div>
      {demoPage === 0 ? <Home demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {/* -------------Required Questions-------------- */}

      {demoPage === 1 ? <ReqQuestion1 demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {demoPage === 2 ? <ReqQuestion2 demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {demoPage === 3 ? <ReqQuestion3 demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {demoPage === 4 ? <ReqQuestion4 demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {demoPage === 5 ? <ReqQuestion5 demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {/* -----------------Optional Questions  ------------------------------------*/}

      {demoPage === 6 ? (
        <div>
          <OptionalQuestionsInfo demoPage={demoPage} setDemoPage={setDemoPage} />
        </div>
      ) : (
        ""
      )}

      {demoPage === 7 ? (
        <OptionalQuestions demoPage={demoPage} setDemoPage={setDemoPage} />
      ) : (
        ""
      )}

      {demoPage === 8 ? (
        <OptionalContactInfo demoPage={demoPage} setDemoPage={setDemoPage} />
      ) : (
        ""
      )}

      {demoPage === 9 ? <YesContactInfo demoPage={demoPage} setDemoPage={setDemoPage} /> : ""}

      {demoPage === 10 ? (
        <FinalSubmission demoPage={demoPage} setDemoPage={setDemoPage} />
      ) : (
        ""
      )}
    </div>
  );
}
