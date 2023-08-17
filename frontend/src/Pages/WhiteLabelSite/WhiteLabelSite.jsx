import PartnerPage from "../../Components/WhiteLabelSite/PartnerWhiteLabel/PartnerWhiteLabel";
import DesignStart from "../../Components/WhiteLabelSite/DesignStart/DesignStart";
import SiteBuildA from "../../Components/WhiteLabelSite/SiteBuildA/SiteBuildA";
import SiteBuildB from "../../Components/WhiteLabelSite/SiteBuildB/SiteBuildB";
import SiteBuildC from "../../Components/WhiteLabelSite/SiteBuildC/SiteBuildC"
import ReviewAndSubmit from "../../Components/WhiteLabelSite/ReviewAndSubmit/ReviewAndSubmit";
import RequestConfirmation from "../../Components/WhiteLabelSite/RequestConfirmation/RequestConfirmation";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/WhiteLabelSite/Modal/Modal";


export default function WhiteLabelPage(props) {

    const [pageNumber, setPageNumber] = useState(0)
    const navigate = useNavigate();

    const navigateToReviewAndSubmit = () => {
        navigate("/ReviewAndSubmit")
    }

    useEffect(() => {
        const savedPageNumber = localStorage.getItem("pageNumber");
        if (savedPageNumber !== null) {
            setPageNumber(parseInt(savedPageNumber, 10));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("pageNumber", pageNumber.toString());
        const targetY = window.innerHeight * 0.2;
        window.scrollTo(0, targetY);
    }, [pageNumber]);


    return (
        <div>

            {pageNumber === 0 ? <PartnerPage
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            /> : ""}

            {pageNumber === 1 ? <DesignStart
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            /> : ""}

            {pageNumber === 2 ? <SiteBuildA
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            /> : ""}

            {pageNumber === 3 ? <SiteBuildB
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}

            /> : ""}

            {pageNumber === 4 ? <SiteBuildC
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
            /> : ""}

            {pageNumber === 5 ? <ReviewAndSubmit
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                navigateToReviewAndSubmit={navigateToReviewAndSubmit}
            /> : ""}

            {pageNumber === 6 ? <RequestConfirmation
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                navigateToReviewAndSubmit={navigateToReviewAndSubmit}
            /> : ""}

            {pageNumber === 21 ? <Modal
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                navigateToReviewAndSubmit={navigateToReviewAndSubmit}
            /> : ""}
            

        </div>
    )
}