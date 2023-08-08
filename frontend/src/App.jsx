import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import SiteBanner from "./Components/SiteBanner/SiteBanner";

//Route imports
import HomePage from './Components/Reporting/LandingPage/Home.jsx';
//Pages Routes

import RequestConfirmation from "./Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import ReviewAndSubmit from "./Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import WhiteLabelPage from "./Pages/WhiteLabelSite/WhiteLabelSite";
import Reporting from "./Pages/Reporting/Reporting";
import { FormProvider } from "./Context/FormContext";
// ---------------------we can delete these eventuaully ------------//
import OptionalContactInfo from "./Components/Reporting/OptionalContact/OptionalContactInfo/OptionalContactInfo";
import YesContactInfo from "./Components/Reporting/OptionalContact/YesContactInfo/YesContactInfo";
import OptionalQuestions from "./Components/Reporting/OptionalQuestions/OptionalQuestion/OptionalQuestions";
import OptionalQuestionsInfo from "./Components/Reporting/OptionalQuestions/OptionalQuestionInfo/OptionalQuestionsInfo";

import CustomSite from "./Components/WhiteLabelSite/CustomSite/customSite";

import FinalSubmission from "./Components/Reporting/FinalSubmission/FinalSubmission";
import Explore from "./Pages/Explore/Explore";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Nav />
      <FormProvider>
        <Routes>
          <Route path="/partner-page" element={<WhiteLabelPage />} />
          <Route path="/" element={<Reporting />} />
          <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} />
          <Route path="/RequestConfirmation" element={<RequestConfirmation />} />
          <Route path="/Explore" element={<Explore />} />

          {/* -----------------We should delete these once we are done with the build ---------- */}
          <Route path="/YesContactInfo" element={<YesContactInfo />} />
          <Route path="/OptionalContactInfo" element={<OptionalContactInfo />} />
          <Route path="/OptionalQuestions" element={<OptionalQuestions />} />
          <Route path="/OptionalQuestionsInfo" element={<OptionalQuestionsInfo />} />
          <Route path="/CustomSite" element={<CustomSite />} />
          <Route path="/FinalSubmission" element={<FinalSubmission />} />
        </Routes>
      </FormProvider>
      {!isHomePage && <SiteBanner />}

      {/* <SiteBanner /> */}
      <Footer />
    </div>
  );
}

export default App;
