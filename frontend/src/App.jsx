import "./App.css";
import { Route, Routes } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";

//Route imports
import Home from "./Components/Reporting/LandingPage/Home";

//Pages Routes

import PartnerWhiteLabel from "./Components/WhiteLabelSite/PartnerWhiteLabel/PartnerWhiteLabel";
import RequestConfirmation from "./Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import ReviewAndSubmit from "./Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import WhiteLabelPage from "./Pages/WhiteLabelSite/WhiteLabelSite";
import Reporting from "./Pages/Reporting/Reporting";
import { FormProvider } from "./Context/FormContext";

import OptionalContactInfo from "./Components/Reporting/OptionalContact/OptionalContactInfo/OptionalContactInfo";
import YesContactInfo from "./Components/Reporting/OptionalContact/YesContactInfo/YesContactInfo";
import OptionalQuestions from "./Components/Reporting/OptionalQuestions/OptionalQuestion/OptionalQuestions";
import OptionalQuestionsInfo from "./Components/Reporting/OptionalQuestions/OptionalQuestionInfo/OptionalQuestionsInfo";
import CustomSite from "./Components/WhiteLabelSite/CustomSite/CustomSite";
import FinalSubmission from "./Components/Reporting/FinalSubmission/FinalSubmission";

function App() {
  return (
    <div className="App">
      <Nav />
      <FormProvider>
        <Routes>
          {/* <Route exact path="/Home" element={<Home />} /> */}
          <Route path="/PartnerWhiteLabel" element={<PartnerWhiteLabel />} />
          <Route path="/WhiteLabelPage" element={<WhiteLabelPage />} />
          <Route path="/" element={<Reporting />} />
          <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} />
          <Route path="/RequestConfirmation" element={<RequestConfirmation />} />
          {/* -----------------We should delete these once we are done with the build ---------- */}
          <Route path="/YesContactInfo" element={<YesContactInfo />} />
          <Route path="/OptionalContactInfo" element={<OptionalContactInfo />} />
          <Route path="/OptionalQuestions" element={<OptionalQuestions />} />
          <Route path="/OptionalQuestionsInfo" element={<OptionalQuestionsInfo />} />
          <Route path="/CustomSite" element={<CustomSite />} />
          <Route path="/FinalSubmission" element={<FinalSubmission />} />
        </Routes>
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
