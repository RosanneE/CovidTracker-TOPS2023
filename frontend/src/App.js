import "./App.css";
import { Route, Routes } from "react-router-dom";

//Component imports
import Footer from "./Components/Footer"
import NavBar from "./Components/Nav"
//Route imports
import Home from "./Pages/Home";

//White Labeling Routes
import DesignStart from "./Pages/WhiteLabeling/DesignStart"
import PartnerWhiteLabel from "./Pages/WhiteLabeling/PartnerWhiteLabel"
import SiteBuildA from "./Pages/WhiteLabeling/SiteBuildA"
import SiteBuildB from "./Pages/WhiteLabeling/SiteBuildB"
import SiteBuildC from "./Pages/WhiteLabeling/SiteBuildC"
import SiteBuildD from "./Pages/WhiteLabeling/SiteBuildD"


function App() {
  return (
    
    <div className="App">
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/DesignStart" element={<DesignStart />} />
        <Route path="/PartnerWhiteLabel" element={<PartnerWhiteLabel />} />
        <Route path="/SiteBuildA" element={<SiteBuildA />} />
        <Route path="/SiteBuildB" element={<SiteBuildB />} />
        <Route path="/SiteBuildC" element={<SiteBuildC />} />
        <Route path="/SiteBuildD" element={<SiteBuildD />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
