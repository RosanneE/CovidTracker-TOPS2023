import { useState, useEffect } from "react"
import ReqQuestion1 from "../../Components/SiteDemo/CriticalQuestions/ReqQuestion1/ReqQuestion1";
import ReqQuestion2 from "../../Components/SiteDemo/CriticalQuestions/ReqQuestion2/ReqQuestion2";
import ReqQuestion3 from "../../Components/SiteDemo/CriticalQuestions/ReqQuestion3/ReqQuestion3";
import ReqQuestion4 from "../../Components/SiteDemo/CriticalQuestions/ReqQuestion4/ReqQuestion4";
import ReqQuestion5 from "../../Components/SiteDemo/CriticalQuestions/ReqQuestion5/ReqQuestion5";
import OptionalQuestions1 from "../../Components/SiteDemo/OptionalQuestions/OptionalQuestion1/OptionalQuestions1";
import OptionalQuestionsInfo from "../../Components/SiteDemo/OptionalQuestions/OptionalQuestionInfo/OptionalQuestionsInfo";
import FinalSubmission from "../../Components/SiteDemo/FinalSubmission/FinalSubmission";
import OptionalContactInfo from "../../Components/SiteDemo/OptionalContact/OptionalContactInfo/OptionalContactInfo";
import YesContactInfo from "../../Components/SiteDemo/OptionalContact/YesContactInfo/YesContactInfo";

export default function SiteDemo() {
  const [demoPage, setDemoPage] = useState(1);

  useEffect(() => {
    const savedDemoPage = localStorage.getItem("demoPage");
    if (savedDemoPage !== null) {
      setDemoPage(parseInt(savedDemoPage, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("demoPage", demoPage.toString());
  }, [demoPage]);

  return (
    <div>
      {/* -------------Required Questions-------------- */}
      {demoPage === 0 ? <ReqQuestion1
        demoPage={demoPage}
        setDemoPage={setDemoPage}
      /> : ""}

      {demoPage === 1 ? <ReqQuestion2
        demoPage={demoPage}
        setDemoPage={setDemoPage}
      /> : ""}

      {/*----------ReqQuestion3, ReqQuestion4 and ReqQuestion5 are in the same view --------- */}
      {demoPage === 2 ? <div>
        <ReqQuestion3
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />
        <ReqQuestion4 />
        <ReqQuestion5
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />
      </div>
        : ""}

      {/* -----------------Optional Questions  ------------------------------------*/}

      {demoPage === 3 ? <div>
        <OptionalQuestionsInfo
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />
      </div>
        : ""}

      {demoPage === 4 ?
        <OptionalQuestions1
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />
        : ""}

      {demoPage === 5 ? <div>
        <OptionalContactInfo
          demoPage={demoPage}
          setDemoPage={setDemoPage}

        />
        <YesContactInfo
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />
      </div>
        : ""}



      {demoPage === 6 ?
        <FinalSubmission
          demoPage={demoPage}
          setDemoPage={setDemoPage}
        />

        : ""}


    </div>
  )
}