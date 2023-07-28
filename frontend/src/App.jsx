import "./App.css";
import { Route, Routes } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer";
import Nav from "./Components/Nav/Nav";

//Route imports
import Home from "./Pages/Home";

//Pages Routes
// import DesignStart from "./Pages/WhiteLabeling/DesignStart"
import PartnerWhiteLabel from "./Pages/WhiteLabeling/PartnerWhiteLabel";
import RequestConfirmation from "./Pages/WhiteLabeling/RequestConfirmation";
// import SiteBuildA from "./Pages/WhiteLabeling/SiteBuildA"
import RequestSite from "./Pages/RequestSitePage/RequestSite";
// import SiteBuildC from "./Pages/WhiteLabeling/SiteBuildC"
import ReviewAndSubmit from "./Pages/WhiteLabeling/ReviewAndSubmit";
import OptionalQuestions from "./Pages/OptionalQuestionsPage/OptionalQuestions";
import CriticalQuestions from "./Pages/CriticalQuestionsPage/CriticalQuestions";
import OptionalContactInfo from "./Pages/OptionalContactPage/OptionalContact";
import { FormProvider } from "./Context/FormContext";

function App() {
  return (
    <div className="App">
      <Nav />
      <FormProvider>
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/DesignStart" element={<DesignStart />} /> */}
            <Route path="/PartnerWhiteLabel" element={<PartnerWhiteLabel />} />
            {/* <Route path="/SiteBuildA" element={<SiteBuildA />} /> */}
            <Route path="/RequestSite" element={<RequestSite />} />
            {/* <Route path="/SiteBuildC" element={<SiteBuildC />} /> */}
            <Route path="/CriticalQuestions" element={<CriticalQuestions />} />
            <Route path="/OptionalQuestions" element={<OptionalQuestions />} />
            <Route path="/OptionalContactInfo" element={<OptionalContactInfo />} />
            <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} />
            <Route path="/RequestConfirmation" element={<RequestConfirmation />} />
        </Routes>
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
