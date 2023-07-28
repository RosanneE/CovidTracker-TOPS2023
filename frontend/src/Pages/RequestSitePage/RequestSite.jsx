import SiteBuildA from "../../Components/RequestSite/SiteBuildA/SiteBuildA";
import SiteBuildB from "../../Components/RequestSite/SiteBuildB/SiteBuildB";
import SiteBuildC from "../../Components/RequestSite/SiteBuildC/SiteBuildC"
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

    const [pageNumber, setPageNumber] = useState(0)
    
    return (
        <div>
            {pageNumber === 0 ? <SiteBuildA 
                pageNumber={ pageNumber } 
                setPageNumber={ setPageNumber } 
                newSite={ newSite } 
                setNewSite={ setNewSite }  
                /> : "" }
            {pageNumber === 1 ? <SiteBuildB 
                pageNumber={ pageNumber } 
                setPageNumber={ setPageNumber }  
                newSite={ newSite } 
                setNewSite={ setNewSite } 
                /> : ""}
            {pageNumber === 2 ? <SiteBuildC  
                pageNumber={ pageNumber } 
                setPageNumber={ setPageNumber } 
                newSite={ newSite } 
                setNewSite={ setNewSite } 

            /> : ""}

        </div>
    )}