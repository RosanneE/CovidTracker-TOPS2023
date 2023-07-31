import "./App.css";
import { Route, Routes } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";

//Route imports
import Home from "./Pages/Home";

//Pages Routes

import PartnerWhiteLabel from "./Components/WhiteLabelSite/PartnerWhiteLabel/PartnerWhiteLabel";
import RequestConfirmation from "./Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import ReviewAndSubmit from "./Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import WhiteLabelPage from "./Pages/WhiteLabelPage/WhiteLabelPage";
import SiteDemo from "./Pages/SiteDemo/SiteDemo";
import { FormProvider } from "./Context/FormContext";

function App() {
  return (
    <div className="App">
      <Nav />
      <FormProvider>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/PartnerWhiteLabel" element={<PartnerWhiteLabel />} />
            <Route path="/WhiteLabelPage" element={<WhiteLabelPage />} />\
            <Route path="/SiteDemo" element={<SiteDemo />} />\
            <Route path="/ReviewAndSubmit" element={<ReviewAndSubmit />} />
            <Route path="/RequestConfirmation" element={<RequestConfirmation />} />
        </Routes>
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
