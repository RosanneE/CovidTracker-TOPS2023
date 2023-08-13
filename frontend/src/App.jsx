import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import "chart.js"

//Component imports
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import SiteBanner from "./Components/SiteBanner/SiteBanner";

//Route imports
import HomePage from "./Components/Reporting/LandingPage/Home.jsx";
//Pages Routes

import RequestConfirmation from "./Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import ReviewAndSubmit from "./Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import WhiteLabelPage from "./Pages/WhiteLabelSite/WhiteLabelSite";
import Reporting from "./Pages/Reporting/Reporting";
import { FormProvider } from "./Context/FormContext";

import CustomSite from "./Components/WhiteLabelSite/CustomSite/CustomSite";

import Explore from "./Pages/Explore/Explore";
import DataChart from "./Components/DataChart/DataChart";
import ExploreDemo from "./Components/WhiteLabelSite/ExploreDemo/ExploreDemo";

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
          <Route path="/Explore" element={<Explore />} />

          {/* -----------------We should delete these once we are done with the build ---------- */}
          <Route path="/CustomSite" element={<CustomSite />} />
          <Route path="/DataChart" element={<DataChart />} />
          <Route path="/ExploreDemo" element={<ExploreDemo />} />
        </Routes>
      </FormProvider>
      {!isHomePage && <SiteBanner />}

      {/* <SiteBanner /> */}
      <Footer />
    </div>
  );
}

export default App;
