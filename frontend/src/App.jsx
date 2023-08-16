import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "chart.js";

//Component imports
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import SiteBanner from "./Components/SiteBanner/SiteBanner";

//Route imports

//Pages Routes

import RequestConfirmation from "./Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import ReviewAndSubmit from "./Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import WhiteLabelPage from "./Pages/WhiteLabelSite/WhiteLabelSite";
import Reporting from "./Pages/Reporting/Reporting";
import { FormProvider } from "./Context/FormContext";

import Explore from "./Pages/Explore/Explore";
import DataChart from "./Components/DataChart/DataChart";
import FinalSubmission from "./Components/Reporting/FinalSubmission/FinalSubmission";

function App() {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="App">
      <Nav />
      <FormProvider>
        <Routes>
          <Route path="/partner-page" element={<WhiteLabelPage />} />
          <Route path="/" element={<Reporting />} />
          <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} />
          <Route path="/RequestConfirmation" element={<RequestConfirmation />} />

          {/* -----------------We should delete these once we are done with the build ---------- */}
          <Route path="/DataChart" element={<DataChart />} />
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
