import SiteBuildB from "../../Components/RequestSite/SiteBuildB/SiteBuildB";
import { useState } from "react"

export default function RequestSite(props) {
    const [newSite, setNewSite] = useState({
    org_name: "",
    contact_name: "",
    email: "",
    site_origin: "",
    home_link: "",
    positive_test_link: "",
    negative_test_link: "",
    more_info_link: "",

    });
    
    return (
        <div>
           
            <SiteBuildB/>
        </div>
    )}