import SiteBuildB from "../../Components/RequestSite/SiteBuildB";
import { useState } from "react"

export default function RequestSite(props) {
    const [newSite, setNewSite] = useState()
    
    return (
        <div>
            <h1>Request Site</h1>
            <SiteBuildB/>
        </div>
    )}